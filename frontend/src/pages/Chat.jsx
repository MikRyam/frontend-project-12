import React from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import NewChannelButton from '../components/chat/newChannelButton';
import ChannelsBar from '../components/chat/ChannelsBar';
import ChannelHeader from '../components/chat/ChannelHeader';
import MessagesBox from '../components/chat/MessagesBox';
import NewMessageInput from '../components/chat/newMessageInput';

const Chat = () => {
  return (
    <Container className="h-100 my-4 shadow text-center text-dark">
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

export default Chat;
