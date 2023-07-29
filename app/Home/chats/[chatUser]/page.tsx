import { getGoSession } from '@/app/tools/getGoServerSession';
import ChatHeader from './components/ChatHeader';
import TextBubble from './components/TextBubble';
import ChatKeyBoard from './components/ChatKeyBoard';

interface TextBubbleData {
  _id: string,
  content: string;
  date: string;
  type: 'received' | 'sent';
}

export default async function Page({ params }: { params: { chatUser: string } }) {
  const chatData:TextBubbleData[] = [
    {
      _id: '1', content: 'Hola amigo que tal estas?', date: '10 min ago', type: 'received',
    },
    {
      _id: '2', content: 'Hola', date: '9 min ago', type: 'sent',
    },
    {
      _id: '3', content: 'Yo todo bien y tu?', date: '9 min ago', type: 'sent',
    },
    {
      _id: '4', content: 'Todo bien bro', date: '8 min ago', type: 'received',
    },
    {
      _id: '5', content: 'Que haces', date: '8 min ago', type: 'received',
    },
    {
      _id: '6', content: '?', date: '7 min ago', type: 'received',
    },
    {
      _id: '7', content: 'Estoy haciendo una tarea de matemáticas que me dejaron para mañana, y tu que haces?', date: '7 min ago', type: 'sent',
    },
    {
      _id: '8', content: 'Estoy en el trabajo', date: '6 min ago', type: 'received',
    },
    {
      _id: '9', content: 'Mañana voy a descansar, quieres salir a jugar futbol?', date: '6 min ago', type: 'received',
    },
    {
      _id: '10', content: 'Esta bien, a que hora?', date: '4 min ago', type: 'sent',
    },
    {
      _id: '11', content: 'A las 4pm ven a mi colonia', date: '4 min ago', type: 'received',
    },
    {
      _id: '12', content: 'Bueno ahi estaré, llevaré mi balón', date: '3 min ago', type: 'sent',
    },
    {
      _id: '13', content: 'Tienes zapatos que me prestes?', date: '3 min ago', type: 'sent',
    },
    {
      _id: '14', content: 'No tengo los mios', date: '3 min ago', type: 'sent',
    },
    {
      _id: '15', content: 'Noo no tengo, pero se los pediré a un amigo', date: '2 min ago', type: 'received',
    },
    {
      _id: '16', content: 'Bueno, pidele que me los preste un rato', date: '1 min ago', type: 'sent',
    },
    {
      _id: '17', content: 'Esta bien', date: 'just now', type: 'received',
    },
    {
      _id: '18', content: 'Te escribo cuando los tenga', date: 'just now', type: 'received',
    },
  ];

  const imageLink = 'https://uploadthing.com/f/bb6d41f1-6b8f-4af8-874b-58f7dc28756b_WhatsApp%20Image%202023-07-06%20at%207.56.41%20PM.jpeg';

  const username = params.chatUser;

  const session = await getGoSession();
  const myImage = session?.user?.picture.pictureURL || '';

  return (
    <div className="w-full pt-14 border-l border-zinc-200 dark:border-zinc-700">
      <ChatHeader name="Vasquez" username={username} image={imageLink} online={false} />

      <div className="overflow-y-auto max-md:max-h-[calc(100vh-7rem)] max-lg:max-h-[calc(100vh-14rem)] max-h-[calc(100vh-11rem)]">
        <div className="w-full px-3 py-2 md:min-w-[calc(22rem)]">
          {chatData.map((chat, key) => {
            // Get the type of the following message in order to evaluate if it is sent or received
            const nextChat = chatData[key + 1];
            const nextType = nextChat ? nextChat.type : '';
            return (
              <TextBubble
                key={chat._id}
                content={chat.content}
                date={chat.date}
                type={chat.type}
                nextType={nextType}
                myImage={myImage}
              />
            );
          })}
        </div>
      </div>
      <ChatKeyBoard />
    </div>
  );
}
