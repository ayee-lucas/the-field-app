import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/app/db/Connection";
import User from "@/app/models/User";
import Notification from "@/app/models/Notification";

dbConnect();

export async function GET(){
    try {
        const notification = await Notification.find()
        .populate("recipient")
        .populate("sender");
        return new NextResponse(JSON.stringify(notification),{
            status: 200
        });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify(err),{
            status: 500,
        })
    }
}

export async function POST(request: NextRequest) {
    try {
      // Parse the request body as JSON
      const json = await request.json();
      console.log({ DataRequest: json });
  
  
      // Create a new room object with the parsed data
      const data = new Notification(json);
      console.log({ NotificationCreated: data });
  
      // Save the Room object to the database
      const notification = await data.save();
  
      // Return a NextResponse object with the saved room data and a 200 status code
      return new NextResponse(
        JSON.stringify(notification), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log({ err });
  
      // If there is an error, return a NextResponse object with an error message and a 500 status code
      const error = {
        message: "Error Saving Notification",
        error: err,
      };
      return new NextResponse(JSON.stringify(error), { status: 500 });
    }
  }