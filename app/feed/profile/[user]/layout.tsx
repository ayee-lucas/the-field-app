/* eslint-disable no-nested-ternary */
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';
import { getGoSession } from '@/app/tools/getGoServerSession';
import defaultImage from '@/public/images/default_user.png';
import { getProfile } from '@/app/server-actions/profile/actions';
import NewPostHandler from '@/app/feed/components/NewPostHandler';
import { goGetUserById } from '@/app/server-actions/signin/actions';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/app/config';
import Followbtn from './components/Followbtn';
import Messagebtn from './components/Messagebtn';
import NavProfile from './components/NavProfile';
import Editbtn from './components/Editbtn';
import Settigns from './components/Settigns';

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const goSession = await getGoSession();

  if (!goSession?.user) {
    redirect(ROUTES.signin);
  }

  const user = await goGetUserById(goSession?.user?.id);

  if ('error' in user) {
    redirect(ROUTES.signin);
  }

  if (!user.data) {
    redirect(ROUTES.signin);
  }

  if (!user.data.picture) {
    redirect(ROUTES.signin);
  }

  const profile = await getProfile(user.data.profile_id);
  if ('error' in profile) {
    redirect(ROUTES.signin);
  }

  return (
    <section className="w-full h-full flex flex-col pt-9 px-20 max-sm:px-3">
      <div className="relative flex flex-col justify-center items-center rounded-lg">
        <div className="w-full h-[200px] bg-black">
          <Image
            src="https://images.unsplash.com/photo-1684410767032-1ce876f35aa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80"
            fill
            alt="banner"
            className="absolute rounded-lg w-full h-full object-cover"
          />

          {goSession?.user?.username !== user.data.username ? null : (
            <div className="opacity-0 text-sm hover:opacity-100 absolute bottom-0 left-0 w-full h-1/4 transition-all z-[1] cursor-pointer bg-black/70 text-white flex justify-center items-center">
              Edit cover
            </div>
          )}

          <div className="absolute mt-28 ml-7 max-sm:ml-3 max-sm:mt-32">
            <div className="relative z-[2] rounded-full h-full w-[180px] min-h-[180px] max-sm:w-[120px] max-sm:min-h-[120px] dark:bg-zinc-900 bg-gray-100">
              <Image
                src={user.data ? user.data.picture.pictureURL : defaultImage}
                alt="user image"
                fill
                className="absolute w-full h-full z-[2] object-cover rounded-full border-[3px] border-gray-700"
              />
              {goSession?.user?.username !== user.data.username ? null : (
                <div className="opacity-0 text-sm hover:opacity-100 absolute bottom-0 left-0 w-full h-1/2 transition-all z-[3] rounded-b-full cursor-pointer bg-black/70 text-white flex justify-center items-center">
                  Edit picture
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col px-3 pt-24 max-sm:pt-14 text-black">
        <div className="flex w-full h-full justify-between items-center gap-5">
          <h1 className="text-6xl max-sm:text-3xl dark:text-white">
            {user.data.username}
          </h1>
          {goSession?.user?.username !== user.data.username ? (
            profile.data.online ? (
              <div className="text-lg max-sm:text-sm text-gray-500 flex items-center gap-1">
                <RxDotFilled className="text-green-500" />
                ONLINE
              </div>
            ) : (
              <div className="text-lg max-sm:text-sm text-gray-500 flex items-center gap-1">
                <RxDotFilled className="text-red-500" />
                OFFLINE
              </div>
            )
          ) : (
            <div className="text-lg max-sm:text-sm text-gray-500 flex items-center gap-1">
              <RxDotFilled className="text-green-500" />
              ONLINE
            </div>
          )}
        </div>
        <div className="flex w-full h-full justify-start items-center gap-5 select-none max-sm:text-sm">
          <h1 className="px-2 text-xl max-sm:text-sm text-gray-500 max-sm:px-0">
            @{user.data.username}
          </h1>
          <h1 className=" text-gray-800 max-sm:text-gray-500 cursor-pointer">
            100 followers
          </h1>

          <h1 className=" text-gray-800 max-sm:text-gray-500 cursor-pointer">
            100 following
          </h1>
        </div>
        {goSession?.user?.username !== user.data.username ? (
          <div className="flex w-full h-full justify-start items-center gap-5">
            <Followbtn />
            <Messagebtn />{' '}
          </div>
        ) : (
          <div className="flex w-full h-full justify-start max-sm:items-center items-center gap-5">
            <Editbtn />
            <Settigns />
          </div>
        )}

        <div className="w-full h-full flex flex-col justify-center items-start p-4 gap-5 rounded-lg border border-gray-300">
          <h1 className="text-lg text-black font-semibold dark:text-white">
            BIO
          </h1>
          <p className="text-gray-600 dark:text-zinc-400">{profile.data.bio}</p>
        </div>

        <NavProfile />
        {goSession?.user?.username !== user.data.username ? null : (
          <NewPostHandler />
        )}
        <div className="px-2">{children}</div>
      </div>
    </section>
  );
}
