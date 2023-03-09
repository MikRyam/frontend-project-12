import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { channelsApi } from './channelsApiSlice';

const initialState = {
  currentChannelId: 1,
};

const currentChannelSlice = createSlice({
  name: 'currentChannel',
  initialState,
  reducers: {
    toggleChannel(state, action) {
      state.currentChannelId = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addMatcher(
      channelsApi.endpoints.getChannelsData.matchFulfilled,
      (state, { payload }) => {
        state.currentChannelId = payload.currentChannelId;
      },
    );
  },
});

export const { toggleChannel } = currentChannelSlice.actions;

export default currentChannelSlice.reducer;
