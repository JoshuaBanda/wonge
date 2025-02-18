class ApiService {
  constructor(baseUrl = 'https://wonge-backend.onrender.com') {
    this.baseUrl = baseUrl;
  }


  // Fetch posts by userId


  // Fetch comments for a specific post
  async fetchComments(jwtToken, postId) {
    try {
      const response = await fetch(`${this.baseUrl}/post-comments/${postId}`, {
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
        const newToken = await this.refreshToken();
        if (newToken) {
          return this.fetchComments(newToken, postId);
        } else {
          throw new Error('Failed to refresh token');
        }
      } else {
        throw new Error(`Failed to load comments for post ${postId}. Status Code: ${response.status}`);
      }
    } catch (e) {
      throw new Error('Failed to load comments');
    }
  }

  // Create a comment for a specific post
  async createComment(jwtToken, postId, commentText, userId) {
    try {
      const response = await fetch(`${this.baseUrl}/post-comments/create`, {
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
  }

  // Function to refresh the JWT token by logging in again
  async refreshToken() {
    try {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');

      if (email && password) {
        const response = await fetch(`${this.baseUrl}/users/login`, {
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
  }
}

export default ApiService;
