/* eslint-disable no-shadow */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Button, Form, Modal } from 'react-bootstrap';
import useSocket from '../../hooks/useSocket';
import { closeModal } from '../../features/modal/modalSlice';
import channelValidation from './channelValidation';

const RenameChannel = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const chatSocket = useSocket();
  const { id, name } = useSelector((state) => state.modal.item);
  const [editNameFailed, setEditNameFailed] = useState(false);
  const channels = useSelector((state) => state.channels.channels);
  const channelsNames = channels.map(({ name }) => name);

  useEffect(() => {
    inputRef.current.select();
  }, []);

  const formik = useFormik({
    initialValues: {
      name,
    },
    validationSchema: channelValidation(channelsNames, t),
    onSubmit: async (values, actions) => {
      try {
        actions.setSubmitting(true);
        const data = { ...values, name: values.name.trim(), id };
        await chatSocket.updateChannel(data);
        setEditNameFailed(false);
        actions.setSubmitting(false);
        dispatch(closeModal());
        return values;
      } catch (err) {
        actions.setSubmitting(false);
        if (err.response?.status === 401) {
          setEditNameFailed(true);
          inputRef.current.select();
        } else {
          toast.error(t('errors.network'));
          throw err;
        }
        return values;
      }
    },
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      formik.handleSubmit(e);
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal animation centered show onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">
          {t('modals.renameChannel.header')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark">
        <Form id="genNewChannel" noValidate onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="rename" className="visually-hidden">
              {t('modals.renameChannel.label')}
            </Form.Label>
            <Form.Control
              id="rename"
              name="name"
              type="name"
              ref={inputRef}
              autoComplete="name"
              placeholder="Введите название канала..."
              required
              onKeyDown={(e) => handleKeyDown(e)}
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              isInvalid={
                (formik.touched.name
                  && formik.errors.name)
                || editNameFailed
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t('modals.renameChannel.cancelButton')}
        </Button>
        <Button
          type="submit"
          form="genNewChannel"
          variant="primary"
          disabled={
            formik.errors.name
            || !formik.values.name
            || formik.isSubmitting
          }
        >
          {t('modals.renameChannel.sendButton')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RenameChannel;
