'use client';

import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import NewPost from '../profile/[user]/components/NewPost';
import ModalPost from '../post/components/ModalPost';

const ClientNewPost = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { data: session } = useSession();

  // eslint-disable-next-line consistent-return
  const handleModal = () => {
    if (!session?.user?.id) return signIn();
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <NewPost onClick={handleModal} />
      <ModalPost isOpen={modalOpen} setOpen={handleModal} />
    </>
  );
};

export default ClientNewPost;
