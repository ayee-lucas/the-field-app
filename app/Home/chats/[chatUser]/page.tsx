import { getGoSession } from '@/app/tools/getGoServerSession';
import { goGetUserById } from '@/app/auth/signin/actions';
import ChatHeader from './components/ChatHeader';
import TextBubble from './components/TextBubble';
import ChatKeyBoard from './components/ChatKeyBoard';
import { GetChatData, GetChats, GetMessages } from '../../actions/actions';

export default async function Page({
  params,
}: {
  params: { chatUser: string };
}) {
  const username = params.chatUser;

  const session = await getGoSession();
  const idUser = session?.user?.sub || '';
  const getUser = (await goGetUserById(idUser)) || '';
  const userConversation = getUser.user?.conversations;

  const chatData = await GetChats(userConversation[0]);

  console.log({ CHATDATA: chatData.data });
  const chat = await GetChatData(username);

  console.log({ CHAT: chat });

  const messagesData = await GetMessages(username);
  console.log({ MESSAGES: messagesData.data });
  const message = messagesData.data;

  const myImage = session?.user?.picture.pictureURL || '';
  const userImage = chat.data.image;

  return (
    <div className="w-full pt-14 border-l border-zinc-200 dark:border-zinc-700">
      <ChatHeader
        name={chat.data.name}
        username={chat.data.username}
        image={chat.data.image}
      />

      <div className="overflow-y-auto max-md:max-h-[calc(100vh-7rem)] max-lg:max-h-[calc(100vh-14rem)] max-h-[calc(100vh-11rem)]">
        <div className="w-full px-3 py-2 md:min-w-[calc(22rem)]">
          {message.map((messages, key) => {
            // Get the type of the following message in order to evaluate if it is sent or received
            const nextChat = message[key + 1] || 'received';
            const nextType =
              getUser.user?.username === nextChat.username
                ? 'sent'
                : 'received';
            const type =
              getUser.user?.username === messages.username
                ? 'sent'
                : 'received';

            return (
              <TextBubble
                key={messages._id}
                content={messages.content}
                date={messages.date}
                type={type}
                nextType={nextType}
                myImage={myImage}
                userImage={userImage}
              />
            );
          })}
        </div>
      </div>
      <ChatKeyBoard
        user={getUser.user?.username || ''}
        chatId={chat.data._id.toString()}
      />
    </div>
  );
}
