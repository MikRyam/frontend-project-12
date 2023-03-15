import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import { closeModal } from '../../features/modal/modalSlice';
import { useFormik } from 'formik';
import { useSocket } from '../../hooks';
import channelValidation from './channelValidation';

const NewChannel = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const chatSocket = useSocket();
  const [newNameFailed, setNewNameFailed] = useState(false);
  const channels = useSelector((state) => state.channels.channels);
  const channelsNames = channels.map(({ name }) => name);

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: channelValidation(channelsNames),
    onSubmit: async (values, actions) => {
      try {
        actions.setSubmitting(true);
        const data = { ...values, name: values.name.trim() };
        console.log('data: ', data);
        await chatSocket.addNewChannel(data);
        setNewNameFailed(false);
        actions.setSubmitting(false);
        dispatch(closeModal());
      } catch (err) {
        actions.setSubmitting(false);
        if (err.response?.status === 401) {
          setNewNameFailed(true);
          inputRef.current.select();
        } else {
          console.log('ошибка сети');
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

  return (
    <Modal animation centered show onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">Добавить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark">
        <Form id="genNewChannel" noValidate onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              name="name"
              type="name"
              ref={inputRef}
              autoComplete="name"
              autoFocus
              placeholder="Введите название канала..."
              required
              onKeyDown={(e) => handleKeyDown(e)}
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              isInvalid={
                (formik.touched.name && formik.errors.name) || newNameFailed
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(closeModal())}>
          Отменить
        </Button>
        <Button
          type="submit"
          form="genNewChannel"
          variant="primary"
          disabled={
            formik.errors.name || !formik.values.name || formik.isSubmitting
          }
        >
          Отправить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewChannel;
