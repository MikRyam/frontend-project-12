/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from '../features/channels/channelsSlice';
import messagesReducer from '../features/messages/messagesSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
    modal: modalReducer,
  },
});
