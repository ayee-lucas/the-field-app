import LoginBtn from "@/app/components/Account/SignUp/LoginBtn";
import SignUpForm from "@/app/components/Account/SignUp/SignUpForm";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center items-center sign-up-bg bg-cover bg-center bg-no-repeat">
      {/** Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]" />
      <div className="bg-white w-1/2 h-full rounded-lg shadow-lg z-10">
        <div className="flex items-center justify-between p-4">
          <div className="relative max-w-[400px] min-h-[500px] w-full h-full">
            <Image
              className="absolute w-full h-full self-center object-cover"
              src={
                "https://images.unsplash.com/photo-1505666287802-931dc83948e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              }
              width={1000}
              height={1000}
              alt="bg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]" />

            <div className="absolute top-0 left-0 w-full h-full  text-white z-[2]">
              <h1 className="text-8xl font-bold px-2">
                R <br /> E <br /> A <br /> D <br />
                <span className="text-fieldGreen"> Y?</span>
              </h1>
            </div>
          </div>
          <div className="w-full h-full p-4">
            <h1 className="text-4xl font-bold">
              SIGN <span className="text-fieldGreen">UP</span>
            </h1>
            <SignUpForm />
            <h1 className="text-sm py-4 ">
              Already have an account? <LoginBtn />
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
