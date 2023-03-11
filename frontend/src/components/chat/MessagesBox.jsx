import React from 'react';
import { useSelector } from 'react-redux';
import MessageItem from './MessageItem';

const MessagesBox = () => {
  const messages = useSelector((state) => state.messages.messages);
  const currentChannelId = useSelector(
    (state) => state.channels.currentChannelId,
  );
  const channelMessages = messages.filter(
    ({ channelId }) => channelId === currentChannelId,
  );

  if (channelMessages) {
    console.log('channelMessages: ', channelMessages);
  }

  return (
    <div
      id="messages-box"
      className="chat-messages overflow-auto px-5 d-flex flex-column small text-start"
    >
      {channelMessages &&
        channelMessages.map(({ id, body, date, username }) => (
          <MessageItem key={id} body={body} username={username} date={date} />
        ))}
    </div>
  );
};

export default MessagesBox;
