import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { channelsApi } from './channelsApiSlice';

const initialState = {
  channels: [],
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannels(state, action) {
      state.channels = action.payload.channels;
    },
  },
  extraReducers: (build) => {
    build.addMatcher(
      channelsApi.endpoints.getChannelsData.matchFulfilled,
      (state, { payload }) => {
        state.channels = payload.channels;
      },
    );
  },
});

export const { addChannels } = channelsSlice.actions;

export default channelsSlice.reducer;
