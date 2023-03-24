/* eslint-disable object-shorthand */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import NewChannelButton from '../components/Chat/newChannelButton';
import ChannelsBar from '../components/Chat/ChannelsBar';
import ChannelHeader from '../components/Chat/ChannelHeader';
import MessagesBox from '../components/Chat/MessagesBox';
import NewMessageInput from '../components/Chat/newMessageInput';
import { setChannels } from '../features/channels/channelsSlice';
import useAuth from '../hooks/useAuth';
import routes from '../routes';

const getData = (headers) => (axios.get(routes.getDataPath(), { headers: headers }));

const ChatPage = () => {
  const auth = useAuth();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { headers } = auth;
        const resp = await getData(headers);
        dispatch(setChannels(resp.data));
      } catch (err) {
        if (!err.isAxiosError) {
          toast.error(t('errors.unknown'));
          throw err;
        }
        if (err.response?.status === 401) {
          toast.error(t('signIn.signInFailed'));
          auth.logOut();
        } else {
          toast.error(t('errors.network'));
          throw err;
        }
        console.log('err', err);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow text-center text-dark">
      <Row className="h-100 bg-white d-flex flex-md-row overflow-hidden rounded">
        <Col
          xs={4}
          md={2}
          className="h-100 border-end px-0 bg-light flex-column h-100 d-flex"
        >
          <NewChannelButton />
          <ChannelsBar />
        </Col>
        <Col xs={8} md={10} className="col p-0 h-100">
          <div className="h-100 d-flex flex-column">
            <ChannelHeader />
            <MessagesBox />
            <NewMessageInput />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatPage;
