import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/modal/modalSlice';
import { Button, Modal } from 'react-bootstrap';
import { useSocket } from '../../hooks';

const DeleteConfirmation = () => {
  const dispatch = useDispatch();
  const chatSocket = useSocket();
  const { id } = useSelector((state) => state.modal.item);

  const handleChannelDelete = async (id) => {
    await chatSocket.deleteChannel(id);
    dispatch(closeModal());
  };

  return (
    <Modal animation centered show onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">Удалить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark">
        <p>Уверены?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(closeModal())}>
          Отменить
        </Button>
        <Button
          type="button"
          variant="danger"
          onClick={() => handleChannelDelete(id)}
        >
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmation;
