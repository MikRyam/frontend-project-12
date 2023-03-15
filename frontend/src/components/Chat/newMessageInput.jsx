import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useAuth, { useSocket } from '../../hooks';
import { BsSendFill } from 'react-icons/bs';

const NewMessageInput = () => {
  const [text, setText] = useState('');
  const auth = useAuth();
  const chatSocket = useSocket();
  const inputRef = useRef(null);
  const currentChannelId = useSelector(
    (state) => state.channels.currentChannelId,
  );

  useEffect(() => {
    inputRef.current.focus();
  }, [currentChannelId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      const message = {
        channelId: currentChannelId,
        body: text,
        username: auth.username,
        date: new Date().toLocaleString([], {
          dateStyle: 'long',
          timeStyle: 'short',
        }),
      };
      chatSocket.addNewMessage(message);
      setText('');
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="mt-auto px-5 py-3">
      <form
        onSubmit={handleSubmit}
        noValidate=""
        className="py-1 border rounded-2"
      >
        <div className="input-group has-validation">
          <input
            name="body"
            aria-label="Новое сообщение"
            placeholder="Введите сообщение..."
            className="border-0 p-0 px-2 form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            ref={inputRef}
            autoFocus
          />
          <button
            type="submit"
            className="p-1 mx-1 border-0 text-primary btn btn-group-vertical"
          >
            <BsSendFill size="1.4rem" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewMessageInput;
