/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18next from 'i18next';

export const defaultChannel = 1;

const initialState = {
  channels: [],
  currentChannelId: defaultChannel,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setChannels: (state, { payload }) => {
      state.channels = payload.channels;
      toast.success(i18next.t('toastify.channels.channelsLoaded'));
    },
    addChannel: (state, action) => {
      state.channels.push(action.payload);
      toast.success(i18next.t('toastify.channels.add'));
    },
    removeChannel: (state, action) => {
      state.channels = state.channels.filter(
        (channel) => channel.id !== action.payload,
      );
      if (state.currentChannelId === action.payload) {
        state.currentChannelId = defaultChannel;
      }
      toast.success(i18next.t('toastify.channels.delete'));
    },
    renameChannel: (state, action) => {
      state.channels = state.channels.map((channel) => {
        if (channel.id !== action.payload.id) return channel;
        return {
          ...channel,
          name: action.payload.name,
        };
      });
      toast.success(i18next.t('toastify.channels.rename'));
    },
    setCurrentChannel: (state, action) => {
      state.currentChannelId = action.payload;
    },
  },
});

export const {
  setChannels,
  addChannel,
  removeChannel,
  renameChannel,
  setCurrentChannel,
} = channelsSlice.actions;

export default channelsSlice.reducer;
