import React from 'react';
import { useSelector } from 'react-redux';
import NewChannel from './NewChannel';
import DeleteConfirmation from './DeleteConfirmation';
import RenameChannel from './RenameChannel';

const modals = {
  genNewChannel: NewChannel,
  renameChannel: RenameChannel,
  confirmDelete: DeleteConfirmation,
};

function ModalWindow() {
  const modalType = useSelector((state) => state.modal.type);
  const Modal = modals[modalType];
  if (!Modal) {
    return null;
  }
  return <Modal />;
}

export default ModalWindow;
