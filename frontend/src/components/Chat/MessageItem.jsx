import React from 'react';
import useAuth from '../../hooks/useAuth';

const MessageItem = ({ body, date, username }) => {
  const auth = useAuth();
  return (
    <div
      className={`d-flex flex-column mb-3 px-2 py-1 shadow-sm text-start rounded ${
        username === auth.username
          ? 'align-self-end bg-info bg-opacity-10'
          : 'bg-light'
      }`}
      style={{ width: 'fit-content', maxWidth: '65%', minWidth: '25%' }}
    >
      <p className="m-0 small text-primary">
        <b>{username}</b>
      </p>
      <p className="mx-1 my-2">{body}</p>
      <span className="text-muted small align-self-end">{date}</span>
    </div>
  );
};

export default MessageItem;
