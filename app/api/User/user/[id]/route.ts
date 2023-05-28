/* import dbConnect from "@/app/db/Connection";
import User from "@/app/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

// Conectar a la base de datos
dbConnect();

interface params extends Request {
  params: {
    id: string;
  };
}

export async function GET(request: Request, params: params) {
  const id = params.params.id;
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);

  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }

  if (session?.user.role !== "user") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return new NextResponse("User not found", {
        status: 404,
      });
    }

    // Verificar si el usuario actual es el propietario del perfil
    if (user._id.toString() !== session?.user.id) {
      return new NextResponse("You are not authorized to view this user", {
        status: 401,
      });
    }

    return new NextResponse(JSON.stringify(user), {
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
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);

  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }

  if (session?.user.role !== "user") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return new NextResponse("User not found", {
        status: 404,
      });
    }

    // Verificar si el usuario actual es el propietario del perfil
    if (user._id.toString() !== session?.user.id) {
      return new NextResponse("You are not authorized to update this user", {
        status: 401,
      });
    }

    // Realizar validaciones en los datos antes de actualizar el usuario
    // Ejemplo: Verificar la validez de la dirección de correo electrónico, la contraseña, etc.

    const updatedUser = await User.findByIdAndUpdate(id, data, {
      new: true,
    });

    return new NextResponse(JSON.stringify(updatedUser), {
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
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);

  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }

  if (session?.user.role !== "user") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return new NextResponse("User not found", {
        status: 404,
      });
    }

    // Verificar si el usuario actual es el propietario del perfil
    if (user._id.toString() !== session?.user.id) {
      return NextResponse.json({ message: "no authorized to delete this user" }, { status: 401 });
    }

    // Eliminar el usuario
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return new NextResponse("User not found", {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(deletedUser), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}
 */