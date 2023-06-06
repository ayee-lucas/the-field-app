'use client';

import React, { useState } from 'react';
import NewPost from '../profile/[user]/components/NewPost';
import ModalPost from '../post/components/ModalPost';

const ClientNewPost = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
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
