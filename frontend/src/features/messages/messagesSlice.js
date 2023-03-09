import { createSlice } from '@reduxjs/toolkit';
import { channelsApi } from '../channels/channelsApiSlice';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessages(state, action) {
      state.messages = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addMatcher(
      channelsApi.endpoints.getChannelsData.matchFulfilled,
      (state, { payload }) => {
        state.messages = payload.messages;
      },
    );
  },
});

export const { addMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
