import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  tagTypes: ['Blogs'],
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => ({
        url: "/blog",
      }),
      providesTags: ['Blogs'],
    }),
    saveBlog: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/blog",
        body: data,
      }),
      invalidatesTags:["Blogs"]
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/blog/${id}`
      }),
      invalidatesTags:["Blogs"]
    }),
  }),
})

export const { useGetBlogQuery, useSaveBlogMutation, useDeleteBlogMutation } = blogApi