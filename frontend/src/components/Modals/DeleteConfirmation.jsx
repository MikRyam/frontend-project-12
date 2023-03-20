import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';
import { closeModal } from '../../features/modal/modalSlice';
import { useSocket } from '../../hooks';

const DeleteConfirmation = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const chatSocket = useSocket();
  const { id } = useSelector((state) => state.modal.item);

  const handleChannelDelete = async () => {
    await chatSocket.deleteChannel(id);
    dispatch(closeModal());
  };

  return (
    <Modal animation centered show onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">
          {t('modals.confirmation.header')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark">
        <p>{t('modals.confirmation.sure')}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(closeModal())}>
          {t('modals.confirmation.cancelButton')}
        </Button>
        <Button
          type="button"
          variant="danger"
          onClick={handleChannelDelete}
        >
          {t('modals.confirmation.confirmDeleteButton')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmation;
