import React, { useContext } from 'react';
import { ModalContext } from './ModalProvider';

const Modal = () => {
  const { isModalOpen, modalContent, closeModal } = useContext(ModalContext);

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {modalContent}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
