import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import Image from "next/image";

export default async function () {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full h-full flex flex-col p-9">
      <div className="flex flex-col justify-center items-center">
        <div className="relative rounded-md h-full w-[200px] min-h-[200px]">
          <Image
            src={`${session?.user?.image}`}
            alt="user image"
            fill
            className="absolute w-full h-full object-cover rounded-full border-[3px] border-gray-700"
          />
        </div>

        <h1 className="p-2 text-6xl">{session?.user?.name}</h1>
      </div>
    </div>
  );
}
