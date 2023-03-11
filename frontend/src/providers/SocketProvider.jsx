import React from 'react';
import { socketContext } from '../contexts';

const SocketProvider = ({ socket, children }) => {
  const { addNewMessage, addNewChannel, deleteChannel, updateChannel } = socket;

  return (
    <socketContext.Provider
      value={{ addNewMessage, addNewChannel, deleteChannel, updateChannel }}
    >
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;
