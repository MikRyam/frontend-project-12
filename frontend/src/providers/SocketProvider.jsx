import React, { useMemo } from 'react';
import { socketContext } from '../contexts';

const SocketProvider = ({ socket, children }) => {
  const {
    addNewMessage,
    addNewChannel,
    deleteChannel,
    updateChannel
  } = socket;

  const SocketProviderValue = useMemo(() => (
    {
      addNewMessage,
      addNewChannel,
      deleteChannel,
      updateChannel
    }
  ), [addNewMessage, addNewChannel, deleteChannel, updateChannel]);

  return (
    <socketContext.Provider
      value={SocketProviderValue}
    >
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;
