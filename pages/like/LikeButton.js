import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You can use axios or fetch for API requests
import { ClipLoader } from 'react-spinners'; // For a loading spinner

const LikeButton = ({ postId, userId, jwtToken, initialLikeCount, initialLikeStatus }) => {
  const [isLiked, setIsLiked] = useState(initialLikeStatus);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch like data when the component mounts
  useEffect(() => {
    fetchLikeData();
  }, []);

  // Fetch like count and like status
  const fetchLikeData = async () => {
    setIsLoading(true);
    try {
      // Fetch like count
      const likeCountResponse = await axios.get(`/api/post-likes/${postId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      const fetchedLikeCount = likeCountResponse.data.length;

      // Fetch like status for the current user
      const likeStatusResponse = await axios.get(`/api/post-likes/has-liked/${postId}/${userId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      setLikeCount(fetchedLikeCount);
      setIsLiked(likeStatusResponse.data);
    } catch (error) {
      console.error("Error fetching like data:", error);
      showErrorSnackbar("Failed to load like data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle toggling like/unlike
  const toggleLike = async () => {
    if (isLoading) return; // Prevent toggling while loading
    setIsLoading(true);

    try {
      if (isLiked) {
        // Unlike the post
        const response = await axios.delete(`/api/post-likes/${postId}/${userId}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        if (response.status === 200) {
          setIsLiked(false);
          setLikeCount(likeCount - 1);
        } else {
          showErrorSnackbar('Failed to unlike the post');
        }
      } else {
        // Like the post
        const response = await axios.post(`/api/post-likes/like`, {
          postId,
          userId,
        }, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        if (response.status === 200) {
          setIsLiked(true);
          setLikeCount(likeCount + 1);
        } else {
          showErrorSnackbar('Failed to like the post');
        }
      }
    } catch (error) {
      console.error("Error toggling like:", error);
      showErrorSnackbar('An error occurred while processing your request');
    } finally {
      setIsLoading(false);
    }
  };

  // Show error message to the user
  const showErrorSnackbar = (message) => {
    alert(message); // You can replace this with a Snackbar component
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {likeCount > 0 && (
        <span style={{ fontWeight: 'bold', color: '#555' }}>
          {likeCount}
        </span>
      )}
      <div style={{ position: 'relative', marginLeft: '5px' }}>
        <button
          onClick={toggleLike}
          disabled={isLoading}
          style={{
            background: 'none',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            color: isLiked ? 'red' : '#888',
          }}
        >
          👍
        </button>
        {isLoading && (
          <ClipLoader
            size={20}
            color="grey"
            loading={isLoading}
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        )}
      </div>
    </div>
  );
};

export default LikeButton;
