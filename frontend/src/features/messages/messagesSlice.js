/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { removeChannel, setChannels } from '../channels/channelsSlice';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeChannel, (state, { payload }) => {
        state.messages = state.messages.filter(
          ({ channelId }) => channelId !== payload,
        );
      })
      .addCase(setChannels, (state, { payload }) => {
        state.messages = payload.messages;
      });
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
