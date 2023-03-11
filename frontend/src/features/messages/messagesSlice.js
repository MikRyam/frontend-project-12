import { createSlice } from '@reduxjs/toolkit';
import { channelsApi } from '../channels/channelsApiSlice';
import { removeChannel } from '../channels/channelsSlice';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.channels.push(action.payload);
      state.currentChannelId = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeChannel, (state, { payload }) => {
        state.messages = state.messages.filter(
          ({ channelId }) => channelId !== payload,
        );
      })
      .addMatcher(
        channelsApi.endpoints.getChannelsData.matchFulfilled,
        (state, { payload }) => {
          state.messages = payload.messages;
        },
      );
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
