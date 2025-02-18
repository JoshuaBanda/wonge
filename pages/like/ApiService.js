import { useState } from 'react';

const baseUrl = 'https://wonge-backend.onrender.com'; // Your backend URL

const ApiService = () => {
  // Fetch all posts with pagination
  const fetchPosts = async (jwtToken, page = 1, limit = 10) => {
    try {
      const response = await fetch(`${baseUrl}/post?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        return data.map(item => new Post(item)); // Adjust according to your Post model
      } else if (response.status === 403) {
        const newToken = await refreshToken();
        if (newToken) {
          return fetchPosts(newToken, page, limit);
        } else {
          throw new Error('Failed to refresh token');
        }
      } else {
        throw new Error(`Failed to load posts. Status Code: ${response.status}`);
      }
    } catch (e) {
      throw new Error('Failed to load posts');
    }
  };

  // Fetch posts by userId
  const fetchPostsByUserId = async (jwtToken, userId) => {
    try {
      const response = await fetch(`${baseUrl}/post/user/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        return data.map(item => new Post(item)); // Adjust according to your Post model
      } else if (response.status === 403) {
        const newToken = await refreshToken();
        if (newToken) {
          return fetchPostsByUserId(newToken, userId);
        } else {
          throw new Error('Failed to refresh token');
        }
      } else {
        throw new Error(`Failed to load posts for user ${userId}. Status Code: ${response.status}`);
      }
    } catch (e) {
      throw new Error('Failed to load posts by user');
    }
  };

  // Fetch a single post by its ID
  const fetchPostById = async (jwtToken, postId) => {
    try {
      const response = await fetch(`${baseUrl}/post/${postId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        return new Post(data); // Adjust according to your Post model
      } else if (response.status === 403) {
        const newToken = await refreshToken();
        if (newToken) {
          return fetchPostById(newToken, postId);
        } else {
          throw new Error('Failed to refresh token');
        }
      } else {
        throw new Error(`Failed to load post by ID ${postId}. Status Code: ${response.status}`);
      }
    } catch (e) {
      throw new Error('Failed to load post');
    }
  };

  // Fetch comments for a specific post
  const fetchComments = async (jwtToken, postId) => {
    try {
      const response = await fetch(`${baseUrl}/post-comments/${postId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        return data.map(item => new Comment(item)); // Adjust according to your Comment model
      } else if (response.status === 403) {
        const newToken = await refreshToken();
        if (newToken) {
          return fetchComments(newToken, postId);
        } else {
          throw new Error('Failed to refresh token');
        }
      } else {
        throw new Error(`Failed to load comments for post ${postId}. Status Code: ${response.status}`);
      }
    } catch (e) {
      throw new Error('Failed to load comments');
    }
  };

  // Create a comment for a specific post
  const createComment = async (jwtToken, postId, commentText, userId) => {
    try {
      const response = await fetch(`${baseUrl}/post-comments/create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post_id: postId,
          comment: commentText,
          user_id: userId,
        }),
      });

      if (response.status === 200 || response.status === 201) {
        return;
      } else {
        throw new Error(`Failed to add comment. Status Code: ${response.status}`);
      }
    } catch (e) {
      throw new Error('Failed to add comment');
    }
  };

  // Function to refresh the JWT token by logging in again
  const refreshToken = async () => {
    try {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');

      if (email && password) {
        const response = await fetch(`${baseUrl}/users/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        if (response.status === 200) {
          const responseData = await response.json();
          const newToken = responseData.access_token;

          // Store the new token
          localStorage.setItem('jwt_token', newToken);

          return newToken;
        } else {
          throw new Error('Failed to refresh token');
        }
      } else {
        throw new Error('No stored credentials found');
      }
    } catch (e) {
      throw new Error('Failed to refresh token');
    }
  };

  return {
    fetchPosts,
    fetchPostsByUserId,
    fetchPostById,
    fetchComments,
    createComment,
    refreshToken,
  };
};

export default ApiService;
