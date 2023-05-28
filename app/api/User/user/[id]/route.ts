import dbConnect from "@/app/db/Connection";
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

    // Validar la dirección de correo electrónico si se proporciona
    if (data.email && !isValidEmail(data.email)) {
      return new NextResponse("Invalid email address", {
        status: 400,
      });
    }

    // Validar la contraseña si se proporciona
    if (data.password && !isValidPassword(data.password)) {
      return new NextResponse("Password should have at least 8 characters", {
        status: 400,
      });
    }

    // Eliminar los campos 'followers' y 'posts' del objeto 'data'
    delete data.followers;
    delete data.posts;

    // Realizar otras validaciones según tus requisitos
    // ...

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

// Función de validación de dirección de correo electrónico
function isValidEmail(email: string): boolean {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
  
  // Función de validación de contraseña
  function isValidPassword(password: string): boolean {
    return password.length >= 8;
  }