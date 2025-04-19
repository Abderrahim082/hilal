import { apiSlice } from '../api/apiSlice';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: (dateFilter) => ({
        url: `/orders${dateFilter ? `?dateFilter=${dateFilter}` : ''}`,
        method: 'GET',
      }),
      providesTags: ['Orders'],
    }),
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: '/orders',
        method: 'POST',
        body: orderData,
      }),
      invalidatesTags: ['Orders', 'Cart', 'Products'],
    }),
  
  }),
});

export const {
  useGetOrdersQuery,
  useCreateOrderMutation,
} = orderApiSlice;