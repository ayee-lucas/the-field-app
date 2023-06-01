import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/app/db/Connection";
import Comment from "@/app/models/Comment";
import User from "@/app/models/User";

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
    try {
      // Parse the request body as JSON
      const json = await request.json();
      console.log({ DataRequest: json });
  
      // Validate the required fields in the request body
      if (!json.author || !json.post || !json.content) {
        return new NextResponse(
          JSON.stringify({
            message: "Missing required fields in the request body.",
          }),
          { status: 400 }
        );
      }
  
      // Create a new notification object with the parsed data
      const data = new Comment(json);
      console.log({ NotificationCreated: data });
  
      // Save the notification object to the database
      const comment = await data.save();
  
      // Return a NextResponse object with the saved notification data and a 200 status code
      return new NextResponse(JSON.stringify(comment), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log({ err });
  
      // If there is any other error, return a NextResponse object with an error message and a 500 status code
      const error = {
        message: "Error saving notification.",
        error: err,
      };
      return new NextResponse(JSON.stringify(error), { status: 500 });
    }
  }
  