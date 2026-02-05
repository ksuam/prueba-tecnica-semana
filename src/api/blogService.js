import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const blogService = {
  // Posts
  getPosts: () => api.get('/posts').then(res => res.data),
  getPostById: (id) => api.get(`/posts/${id}`).then(res => res.data),
  getPostsByUser: (userId) => api.get(`/posts/user/${userId}`).then(res => res.data),
  
  // Users
  getUsers: () => api.get('/users').then(res => res.data),
  getUserById: (id) => api.get(`/users/${id}`).then(res => res.data),
  
  // Tags
  getTags: () => api.get('/posts/tag-list').then(res => res.data),
  getPostsByTag: (tag) => api.get(`/posts/tag/${tag}`).then(res => res.data),
};