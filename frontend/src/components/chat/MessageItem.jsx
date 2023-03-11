import React from 'react';
import useAuth from '../../hooks';

const MessageItem = ({ body, date, username }) => {
  const auth = useAuth();
  return (
    <div
      className={`d-flex flex-column mb-3 p-2 shadow-sm text-start rounded ${
        username === auth.username ? 'align-self-end bg-info bg-opacity-10' : 'bg-light'
      }`}
      style={{ width: 'fit-content', maxWidth: '65%', minWidth: '25%' }}
    >
      <p className="m-0">
        <b>{username}</b>
      </p>
      <p className="m-1">{body}</p>
      <span className="text-muted small align-self-end">{date}</span>
    </div>
  );
};

export default MessageItem;
