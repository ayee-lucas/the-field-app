import { FaUserCircle } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="min-h-screen w-full grid grid-cols-2">
      <div className="w-full h-full flex flex-col items-center justify-center bg-black">
        <div className="min-w-[300px] min-h-[300px] w-[500px] h-[500px] bg-white rounded-lg flex flex-col items-center justify-between">
          <div className="flex flex-col justify-center items-center w-full pt-10 pb-5">
            <h1 className="text-6xl font-bold">
              THE <span className="text-fieldGreen">FIELD</span>
            </h1>
          </div>

          <h3 className="font-medium ml-1">Welcome back!</h3>
          <form
            action=""
            className="flex flex-col justify-between gap-4 w-full h-full px-5 py-10"
          >
            <div className="w-full">
              <label htmlFor="" className="text-sm">
                Username
              </label>
              <div className="flex gap-2 w-full items-center justify-start">
                <input
                  type="text"
                  required
                  placeholder="Enter your username"
                  className=" rounded-lg placeholder:text-sm px-4 py-2 border w-[80%] border-fieldGreen focus:outline-none focus:ring-1 focus:ring-fieldGreen transition-all"
                />

                <FaUserCircle size={20} className="ml-4" />
              </div>

              <div className="w-full mt-4">
                <label htmlFor="" className="text-sm">
                  Password
                </label>
                <div className="flex gap-2 w-full items-center justify-start">
                  <input
                    required
                    type="password"
                    placeholder="Enter your password"
                    className=" rounded-lg placeholder:text-sm px-2 py-2 border w-[80%] border-fieldGreen focus:outline-none focus:ring-1 focus:ring-fieldGreen transition-all"
                  />
                  <HiLockClosed size={20} className="ml-4" />
                </div>
              </div>
            </div>
            <button
            type="submit"
              className="w-full relative rounded-lg bg-fieldGreen border border-fieldGreen py-2 text-white font-medium hover:bg-white hover:text-fieldGreen transition-all
            after:content-[''] after:h-[4px] after:w-full after:bg-black after:mt-2 after:absolute after:left-0 after:bottom-[-1rem]"
            >
              Login
            </button>
            <h1>
              Don't have an account yet?
              <Link
                href={"/account/signup"}
                className="px-3 underline text-fieldGreen"
              >
                Register
              </Link>
            </h1>
          </form>
        </div>
      </div>
      <div className="w-full relative h-full sign-in-bg bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div className="absolute z-[2] flex flex-col items-start px-4 justify-center w-full h-full text-6xl text-white">
          <h1 className="">DISCOVERING</h1>
          <h1 className="text-fieldGreen py-3"> SPORTS </h1>
          <h1> TALENT </h1>
          <h3 className="text-xl my-4 mx-1">
            Together, we can make a difference
          </h3>
        </div>
      </div>
    </div>
  );
}
