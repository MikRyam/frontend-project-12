import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { channelsApi } from '../features/channels/channelsApiSlice';
import channelsReducer from '../features/channels/channelsSlice';
import messagesReducer from '../features/messages/messagesSlice';

export const store = configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
    // Add the generated reducer as a specific top-level slice
    [channelsApi.reducerPath]: channelsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(channelsApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
