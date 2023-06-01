import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/app/db/Connection";
import Organization from "@/app/models/Organizations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

dbConnect();

export async function POST(request: NextRequest) {
    try {
        // Parse the request body as JSON
        const json = await request.json();
        console.log({ DataRequest: json });

        // Validate the required fields in the request body
        /*if (!json.recipient || !json.sender || !json.type) {
          return new NextResponse(
            JSON.stringify({
              message: "Missing required fields in the request body.",
            }),
            { status: 400 }
          );
        }*/

        // Create a new notification object with the parsed data
        const data = new Organization(json);
        console.log({ OrganizationCreated: data });

        // Save the notification object to the database
        const organization = await data.save();

        // Return a NextResponse object with the saved notification data and a 200 status code
        return new NextResponse(JSON.stringify(organization), {
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

