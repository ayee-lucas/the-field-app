import { FiSearch } from 'react-icons/fi';
import { getGoSession } from '@/app/tools/getGoServerSession';
import { goGetUserById } from '@/app/auth/signin/actions';
import { AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';
import Conversations from './components/Conversations';
import { GetChats } from '../actions/actions';
import Header from './components/Header';

export default async function Page() {
  const imageLink =
    'https://uploadthing.com/f/bb6d41f1-6b8f-4af8-874b-58f7dc28756b_WhatsApp%20Image%202023-07-06%20at%207.56.41%20PM.jpeg';

  const session = await getGoSession();
  const idUser = session?.user?.sub || '';
  const getUser = (await goGetUserById(idUser)) || '';
  const userConversation = getUser.user?.conversations;

  let chats;

  if (userConversation) {
    const conversationsData = await GetChats(userConversation[0]);
    chats = conversationsData.data;
  }

  return (
    <div className=" md:w-fit pt-14">
      <Header session={getUser.user?.username || ''} />
      <div className="overflow-y-auto max-h-[calc(100vh-10rem)] max-lg:max-h-[calc(100vh-13rem)]">
        <div className="w-full">
          {chats &&
            chats.map((chat) => (
              <Conversations
                key={chat._id}
                name={chat.name}
                username={chat.username}
                image={chat.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
