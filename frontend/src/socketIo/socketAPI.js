import { store } from '../app/store';
import {
  addChannel,
  removeChannel,
  renameChannel,
  setCurrentChannel,
} from '../features/channels/channelsSlice';
import { addMessage } from '../features/messages/messagesSlice';

const socketAPI = (socket) => {
  socket.on('newMessage', (message) => {
    store.dispatch(addMessage(message));
  });

  socket.on('newChannel', (channel) => {
    store.dispatch(addChannel(channel));
  });

  socket.on('removeChannel', ({ id }) => {
    store.dispatch(removeChannel(id));
  });

  socket.on('renameChannel', ({ id, name }) => {
    store.dispatch(renameChannel({ id, name }));
  });

  const addNewMessage = (message) => socket.emit('newMessage', message, (response) => {
    if (response.status !== 'ok') {
      console.log(response.status);
    }
  });

  const addNewChannel = (channel) => socket.emit('newChannel', channel, (response) => {
    if (response.status === 'ok') {
      const { id } = response.data;
      store.dispatch(setCurrentChannel(id));
    }
    console.log(response.status);
  });

  const deleteChannel = (id) => socket.emit('removeChannel', { id }, (response) => {
    if (response.status !== 'ok') {
      console.log(response.status);
    }
  });

  const updateChannel = (channel) => socket.emit('renameChannel', channel, (response) => {
    if (response.status !== 'ok') {
      console.log(response.status);
    }
  });

  return {
    addNewMessage,
    addNewChannel,
    deleteChannel,
    updateChannel,
  };
};

export default socketAPI;
