import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/app/db/Connection';
import Organization from '@/app/models/Organizations';

dbConnect();

export async function GET() {
  try {
    const organization = await Organization.find()
      .populate('recipient')
      .populate('sender');

    // Validar si se encontraron notificaciones
    if (organization.length === 0) {
      return new NextResponse(
        JSON.stringify({ message: 'No organizations found.' }),
        {
          status: 404,
        },
      );
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
