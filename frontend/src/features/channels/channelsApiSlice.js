import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const channelsApi = createApi({
  reducerPath: 'channelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/',
    credentials: 'include',
    prepareHeaders: (headers) => {
      const userId = JSON.parse(localStorage.getItem('user'));
      const { token } = userId;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChannelsData: builder.query({
      query: () => 'data',
    }),
  }),
});

export const { useGetChannelsDataQuery } = channelsApi;
