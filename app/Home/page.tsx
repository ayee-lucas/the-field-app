import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import Link from "next/link";

export default async function Page(){

    const session = await getServerSession(authOptions);

    console.log({session})

    return (
        <div className="fixed top-[9vh] left-[240px] max-md:left-0 w-full z-50 h-screen p-4">
            <Link href={`/Home/profile/${session?.user?.id}`}>
                account
            </Link>
        </div>
    );
}   



