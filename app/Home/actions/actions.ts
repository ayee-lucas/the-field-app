'use server';

import dbConnect from '@/app/db/Connection';
import Post from '@/app/models/Post';
import Comment from '@/app/models/Comment';
import User from '@/app/models/User';
import Conversation from '@/app/models/Conversations';
import Chats from '@/app/models/Chats';
import Messages from '@/app/models/Messages';

type GetPostsType = {
  data: string;
};

type GetPostsTypeErr = {
  error: string;
  message: 'No Posts to show';
};

type GetConversationsType = {
  data: string;
};

type GetConversationsTypeErr = {
  error: string;
  message: 'No Conversations';
};

type GetUserType = {
  data: string[];
};

type GetUserTypeErr = {
  error: string;
  message: 'User not found';
};

// TODO: DELETE THIS CODE

// export async function GetInitialPosts(): Promise<GetPostsType> {
//   try {
//     const res = await fetch(`${url}/api/Posts/initial`, {
//       method: 'GET',
//       cache: 'no-store',
//       headers: { 'Content-Type': 'application/json' },
//     });
//     const posts = await res.json();
//
//     if (!res.ok) {
//       return {
//         error: posts.error,
//         message: 'No Posts to show',
//         data: [],
//       };
//     }
//
//     const result = {
//       data: posts,
//     };
//
//     return result;
//   } catch (error) {
//     return {
//       error,
//       message: 'No Posts to show',
//       data: [],
//     };
//   }
// }

export async function GetInitialPosts(): Promise<
  GetPostsType | GetPostsTypeErr
> {
  try {
    dbConnect();
    const posts = await Post.find()
      .sort({ createdAt: 'desc' })
      .populate('author', 'username name picture')
      .populate('comments', 'author', Comment)
      .populate('likes', 'username', User)
      .sort({ createdAt: 'desc' })
      .limit(3);

    if (posts.length === 0) {
      return {
        error: 'Posts arr lenght 0',
        message: 'No Posts to show',
      };
    }

    return {
      data: JSON.stringify(posts),
    };
  } catch (err) {
    console.log(err);
    return {
      error: JSON.stringify(err),
      message: 'No Posts to show',
    };
  }
}

export async function GetMessages(
  user: string
): Promise<GetConversationsType | GetConversationsTypeErr> {
  try {
    dbConnect();

    const messages = await Messages.find();
    const chat = await Chats.findOne({ username: user }).populate(
      'messages',
      'content date username image'
    );

    if (chat.length === 0) {
      return {
        error: 'Conversations arr lenght 0',
        message: 'No Conversations',
      };
    }

    return {
      data: chat.messages,
    };
  } catch (err) {
    console.log(err);
    return {
      error: JSON.stringify(err),
      message: 'No Conversations',
    };
  }
}

export async function GetChats(
  _id: string
): Promise<GetConversationsType | GetConversationsTypeErr> {
  try {
    dbConnect();

    const chats = Chats.find();
    const conversations = await Conversation.findById(_id).populate(
      'chats',
      'username name messages image'
    );

    if (conversations.length === 0) {
      return {
        error: 'Conversations arr lenght 0',
        message: 'No Conversations',
      };
    }

    return {
      data: conversations.chats,
    };
  } catch (err) {
    console.log(err);
    return {
      error: JSON.stringify(err),
      message: 'No Conversations',
    };
  }
}

export async function GetChatData(
  user: string
): Promise<GetConversationsType | GetConversationsTypeErr> {
  try {
    dbConnect();

    const chatData = await Chats.findOne({ username: user });

    if (chatData.length === 0) {
      return {
        error: 'Chat arr lenght 0',
        message: 'No Conversations',
      };
    }

    return {
      data: chatData,
    };
  } catch (err) {
    console.log(err);
    return {
      error: JSON.stringify(err),
      message: 'No Conversations',
    };
  }
}

export async function GetUser(
  newUser: string
): Promise<GetUserType | GetUserTypeErr> {
  try {
    dbConnect();

    const user = await User.findOne({ username: newUser });

    console.log({ USER_ACTION: user });

    if (!user) {
      return {
        error: 'User not found',
        message: 'User not found',
      };
    }

    return {
      data: user,
    };
  } catch (err) {
    console.log(err);
    return {
      error: JSON.stringify(err),
      message: 'User not found',
    };
  }
}
