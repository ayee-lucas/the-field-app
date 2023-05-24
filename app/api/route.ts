import { NextResponse } from "next/server";
import dbConnect from "../db/Connection";


dbConnect();

export async function GET() {
    return NextResponse.json({
        message: "Hello World"
    })
}
