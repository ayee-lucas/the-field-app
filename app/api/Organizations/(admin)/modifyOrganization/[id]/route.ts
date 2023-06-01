import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/app/db/Connection";
import Organization from "@/app/models/Organizations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

dbConnect();

interface params extends Request {
    params: {
        id: string;
    };
}



export async function GET(request: Request, params: params) {
    const id = params.params.id;
  
    try {
      const organization = await Organization.findById(id)
      // Validar si no se encontró la notificación
      if (!organization) {
        return new NextResponse("Notification not found", {
          status: 404,
        });
      }
      return new NextResponse(JSON.stringify(organization), {
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
      const organization = await Organization.findByIdAndUpdate(id, data, {
        new: true,
      });
  
      // Validar si no se encontró la notificación
      if (!organization) {
        return new NextResponse("Notification not found", {
          status: 404,
        });
      }
  
      return new NextResponse(JSON.stringify(organization), {
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
      const organization = await Organization.findByIdAndDelete(id);
  
      // Validar si no se encontró la notificación
      if (!organization) {
        return new NextResponse("Notification not found", {
          status: 404,
        });
      }
  
      return new NextResponse(JSON.stringify(organization), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify(err), {
        status: 500,
      });
    }
}