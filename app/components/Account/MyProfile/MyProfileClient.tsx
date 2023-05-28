
import { getServerSession } from "next-auth";
import { getProfile } from "../actions";
import { IUser } from "@/app/models/User";
import defaultImage from "../../../../public/images/default_user.png";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  const id = session?.user?.sub;

  const user: IUser = await getProfile(id);

  console.log({ serverActions: user });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full flex flex-col pt-9 px-20">
      <div className="relative flex flex-col justify-center items-center rounded-lg">
        <div className="w-full h-[200px] bg-black">
          <Image
            src={
              "https://images.unsplash.com/photo-1684410767032-1ce876f35aa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80"
            }
            fill
            alt="banner"
            className="absolute rounded-lg w-full h-full object-cover"
          />
          <div className="absolute mt-28 ml-7">
            <div className="relative rounded-full h-full w-[180px] min-h-[180px] cursor-pointer bg-white ">
              <div className="opacity-0 text-sm hover:opacity-100 absolute bottom-0 left-0 w-full h-1/2 bg-black/70 text-white z-10 rounded-b-full flex justify-center items-center">
                Edit Profile
              </div>
              <Image
                src={
                  session?.user?.image
                    ? `${session?.user?.image}`
                    : defaultImage
                }
                alt="user image"
                fill
                className="absolute w-full h-full object-cover rounded-full border-[3px] border-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col px-3 pt-24 text-black">
        <div className="flex w-full h-full justify-start items-center gap-5">
          <h1 className="text-6xl">{user.name}</h1>
          {user.online ? (
            <div className="text-lg text-gray-500 flex items-center gap-1">
              <RxDotFilled className="text-green-500" />
              ONLINE
            </div>
          ) : (
            <div className="text-lg text-gray-500 flex items-center gap-1">
              <RxDotFilled className="text-red-500" />
              OFFLINE
            </div>
          )}
        </div>
        <h1 className="px-2 w-full h-full text-xl text-gray-500">
          @{user.username}
        </h1>
      </div>
    </div>
  );
}
