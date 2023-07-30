'use server';

import dbConnect from '@/app/db/Connection';
import Post from '@/app/models/Post';
import Comment from '@/app/models/Comment';
import User from '@/app/models/User';

type GetPostsType = {
  data: string;
};

type GetPostsTypeErr = {
  error: string;
  message: 'No Posts to show';
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
