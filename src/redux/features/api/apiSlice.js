import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => ({
        url: "/blog",
      }),
    }),
    saveBlog: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/blog",
        body: data,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/blog/${id}`
      }),
    }),
  }),
})

export const { useGetBlogQuery, useSaveBlogMutation, useDeleteBlogMutation } = blogApi