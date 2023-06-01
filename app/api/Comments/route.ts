import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/app/db/Connection";
import Comment from "@/app/models/Comment";
import User from "@/app/models/User";
import Post from "@/app/models/Post";

dbConnect();

export async function GET(request: NextRequest) {
    try {
      // Obtener todos los usuarios
      const users = await Comment.find();
  
      // Obtener todas las notificaciones con datos relacionados
      const comment = await Comment.find()
      .populate({
        path: "author",
        select: "name username",
      })
      .populate({
        path: "post",
        populate: {
          path: "author",
          select: "name username"
        }
      });
  
      const data = {
        comment
      };
  
      return new NextResponse(JSON.stringify(data), { status: 200 });
    } catch (err) {
      console.error(err);
      return new NextResponse(JSON.stringify(err), { status: 500 });
    }
  }

  export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    try {
      // Parse the request body as JSON
    const { post, content } = await request.json();

    // Validate the required fields in the request body
    if (!post || !content) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing required fields in the request body.",
        }),
        { status: 400 }
      );
    }

    // Get the user session
    const userId = session?.user?.id;

    // Validate the user session
    if (!userId) {
      return new NextResponse(
        JSON.stringify({
          message: "User session not found.",
        }),
        { status: 401 }
      );
    }

   
    const comment = new Comment({
      post,
      content,
      author: userId,
    });
    console.log({ CommentCreated: comment });

    await comment.save();

    const postDocument = await Post.findById(post);

    // Add the comment to the comments array of the post
    postDocument.comments.push(comment._id);
    await postDocument.save();

    return new NextResponse(JSON.stringify(comment), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

    } catch (err) {
      return new NextResponse(JSON.stringify(err), { status: 500 });
    }
  }
  