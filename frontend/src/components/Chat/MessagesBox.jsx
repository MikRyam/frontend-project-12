import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import MessageItem from './MessageItem';

const MessagesBox = () => {
  const lastMessageRef = useRef(null);
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

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [channelMessages]);

  return (
    <div className="d-flex flex-column-reverse flex-grow-1 overflow-auto">
      <div
        id="messages-box"
        className="chat-messages px-5 d-flex flex-column justify-content-end text-start"
      >
        {channelMessages &&
          channelMessages.map(({ id, body, date, username }) => (
            <MessageItem key={id} body={body} username={username} date={date} />
          ))}
        <div ref={lastMessageRef} />
      </div>
    </div>
  );
};

export default MessagesBox;
