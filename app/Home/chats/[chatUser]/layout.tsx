import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Conversations from '../components/Conversations';

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const imageLink =
    'https://uploadthing.com/f/bb6d41f1-6b8f-4af8-874b-58f7dc28756b_WhatsApp%20Image%202023-07-06%20at%207.56.41%20PM.jpeg';

  const conversationsData = [
    {
      name: 'John Doe',
      username: 'jdoe',
      image: imageLink,
      online: true,
    },
    {
      name: 'Jane Smith',
      username: 'jsmith',
      image: imageLink,
      online: false,
    },
    {
      name: 'Mike Johnson',
      username: 'mjohnson',
      image: imageLink,
      online: true,
    },
    {
      name: 'Emily Brown',
      username: 'ebrown',
      image: imageLink,
      online: false,
    },
    {
      name: 'Chris Lee',
      username: 'clee',
      image: imageLink,
      online: true,
    },
    {
      name: 'Alex Martinez',
      username: 'amartinez',
      image: imageLink,
      online: false,
    },
    {
      name: 'Sarah Kim',
      username: 'skim',
      image: imageLink,
      online: true,
    },
    {
      name: 'Daniel Chen',
      username: 'dchen',
      image: imageLink,
      online: false,
    },
    {
      name: 'Laura Wang',
      username: 'lwang',
      image: imageLink,
      online: true,
    },
  ];

  return (
    <div className="flex">
      <div className=" md:w-fit pt-14 max-md:hidden">
        <div className="relative mt-4 rounded-lg px-3">
          <input
            placeholder="Search"
            className="w-full bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded-xl py-1.5 pr-3 pl-10 focus:border-gray-400 dark:focus:border-gray-700 focus:outline-none"
          />
          <div className="absolute inset-y-0 left-0 pl-6 px-3 flex items-center">
            <FiSearch className="text-gray-600 dark:text-gray-300" size={15} />
          </div>
        </div>

        <div className="md:w-96 w-full text-black font-semibold dark:text-gray-300 px-4 pt-4 pb-1">
          Messages
        </div>
        <div className="overflow-y-auto max-h-[calc(100vh-10rem)] max-lg:max-h-[calc(100vh-13rem)]">
          <div className="w-full">
            {conversationsData.map((conversation) => (
              <Conversations
                key={conversation.username}
                name={conversation.name}
                username={conversation.username}
                image={conversation.image}
                online={conversation.online}
              />
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
