import React from 'react';
import { socketContext } from '../contexts';

const SocketProvider = ({ socket, children }) => {
  const { createMessage, createChannel, deleteChannel, updateChannel } = socket;

  return (
    <socketContext.Provider
      value={{ createMessage, createChannel, deleteChannel, updateChannel }}
    >
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;
