import { createSlice } from '@reduxjs/toolkit';
import { channelsApi } from './channelsApiSlice';

export const defaultChannel = 1;

const initialState = {
  channels: [],
  currentChannelId: defaultChannel,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannel: (state, action) => {
      state.channels.push(action.payload);
      state.currentChannelId = action.payload.id;
    },
    removeChannel: (state, action) => {
      state.channels = state.channels.filter(
        (channel) => channel.id !== action.payload,
      );
      if (state.currentChannelId === action.payload) {
        state.currentChannelId = defaultChannel;
      }
    },
    renameChannel: (state, action) => {
      state.channels = state.channels.map((channel) => {
        if (channel.id !== action.payload.id) return channel;
        return {
          ...channel,
          name: action.payload.name,
        };
      });
    },
    setCurrentChannel: (state, action) => {
      state.currentChannelId = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addMatcher(
      channelsApi.endpoints.getChannelsData.matchFulfilled,
      (state, { payload }) => {
        state.channels = payload.channels;
        state.currentChannelId = payload.currentChannelId;
      },
    );
  },
});

export const { addChannel, removeChannel, renameChannel, setCurrentChannel } =
  channelsSlice.actions;

export default channelsSlice.reducer;
