
import dbConnect from "@/app/db/Connection";
import User from "@/app/models/User";

dbConnect()

export async function getProfile(username: any) {
  "use server";

  const userFind = await User.findOne({username: username});

  return userFind;
}

