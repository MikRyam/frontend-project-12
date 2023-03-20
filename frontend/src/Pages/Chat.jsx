import React from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import NewChannelButton from '../components/Chat/newChannelButton';
import ChannelsBar from '../components/Chat/ChannelsBar';
import ChannelHeader from '../components/Chat/ChannelHeader';
import MessagesBox from '../components/Chat/MessagesBox';
import NewMessageInput from '../components/Chat/newMessageInput';

const Chat = () => (
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

export default Chat;
