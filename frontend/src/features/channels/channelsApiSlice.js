import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const channelsApi = createApi({
  reducerPath: 'channelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/',
    credentials: 'include',
    prepareHeaders: (headers) => {
      const userId = JSON.parse(localStorage.getItem('userId'));
      const { token } = userId;
      // const token = getState().auth.token

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChannelsData: builder.query({
      query: () => `data`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetChannelsDataQuery } = channelsApi;
