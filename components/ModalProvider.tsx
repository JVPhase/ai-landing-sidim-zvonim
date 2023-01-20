import React, { createContext, useState } from 'react';
import Modal from './Modal';

export const ModalContext = createContext({} as any);

const ModalProvider = ({ children }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content: any) => {
    console.log('openModal called');
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalContent, openModal, closeModal }}
    >
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
