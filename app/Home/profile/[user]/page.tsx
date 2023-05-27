import { getServerSession } from "next-auth";
import { getProfile } from "./actions/actions";
import { IUser } from "@/app/models/User";
import Followbtn from "./components/Followbtn";
import defaultImage from "../../../../public/images/default_user.png";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Messagebtn from "./components/Messagebtn";

export default async function Page({ params }: { params: { user: string } }) {
  return (
    <div className="w-full h-full">
      a

    </div>
  );
}
