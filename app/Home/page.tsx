import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import Link from "next/link";

export default async function Page(){

    const session = await getServerSession(authOptions);

    console.log({session})

    return (
        <div className="w-full h-full">
            <Link href={`/Home/profile/${session?.user?.id}`}>
                account
            </Link>
        </div>
    );
}   



