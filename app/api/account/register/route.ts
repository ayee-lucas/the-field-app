import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/app/db/Connection";
import User, { IUser } from "@/app/models/User";
import { hashPassword } from "@/app/tools/encrypt";

dbConnect();

export async function POST(req: NextRequest) {
  try {
    const json: IUser = await req.json();

    if (json.password.length < 8) {
      return new NextResponse(JSON.stringify({ err: "Password too short" }), {status: 400});
    }

    const hashedPassword = await hashPassword(json.password);

    json.password = hashedPassword as string;

    const user = new User(json);

    await user.save();

    return new NextResponse(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ err }), { status: 500 });
  }
}
