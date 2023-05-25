import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/app/db/Connection";
import User from "@/app/models/User";
import Notification from "@/app/models/Notification";

dbConnect();

interface params extends Request {
  params: {
    id: string;
  };
}

export async function GET(request: Request, params: params) {
  const id = params.params.id;

  try {
    const notification = await Notification.findById(id)
      .populate("recipient")
      .populate("sender");
    if (!notification) {
      return new NextResponse("Notification not found", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(notification), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function PUT(request: Request, params: params) {
  const id = params.params.id;
  const data = await request.json();
  try {
    const notification = await Notification.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!notification) {
      return new NextResponse("Notification not found", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(notification), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function DELETE(request: Request, params: params) {
  const id = params.params.id;
  try {
    const notification = await Notification.findByIdAndDelete(id);
    if (!notification) {
      return new NextResponse("Notification not found", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(notification), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
