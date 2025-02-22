import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You can use axios or fetch for https://wonge-backend.onrender.com requests
import { ClipLoader } from 'react-spinners'; // For a loading spinner
import Rating from './Rating';
import { FaHeart } from 'react-icons/fa6';

const LikeButton = ({ postId, userId, jwtToken, initialLikeCount, initialLikeStatus }) => {
  const [isLiked, setIsLiked] = useState(initialLikeStatus);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLoading, setIsLoading] = useState(false);

 // console.log('postId',postId,'userid ',userId,' jwtToken',jwtToken,'initial like count',initialLikeCount,'inititual like status',initialLikeStatus);

  // Fetch like data when the component mounts
  useEffect(() => {
    fetchLikeData();
  }, [postId,isLiked]);

  // Fetch like count and like status
  const fetchLikeData = async () => {
    setIsLoading(true);
    try {
      // Fetch like count
      const likeCountResponse = await axios.get(`https://wonge-backend.onrender.com/post-likes/${postId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      const fetchedLikeCount = likeCountResponse.data.length;
      console.log('like count:',fetchedLikeCount);

      // Fetch like status for the current user
      const likeStatusResponse = await axios.get(`https://wonge-backend.onrender.com/post-likes/has-liked/${postId}/${userId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });


      setLikeCount(fetchedLikeCount);

      console.log('like status response',likeStatusResponse.data,'like count:',likeCount);
      setIsLiked(likeStatusResponse.data);
    } catch (error) {
      console.error("Error fetching like data:", error);
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
        const response = await axios.delete(`https://wonge-backend.onrender.com/post-likes/${postId}/${userId}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        
        console.log('unlike response',response.status);
        if (response.status === 200||2001) {
          setIsLiked(false);
          setLikeCount(likeCount - 1);
        } else {
          showErrorSnackbar('Failed to unlike the post');
        }
      } else {
        // Like the post
        const response = await axios.post(`https://wonge-backend.onrender.com/post-likes/like`, {
          postId,
          userId,
        }, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        console.log('like response',response.status);
        if (response.status === 201) {
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
    //  (message); // You can replace this with a Snackbar component
   // console.log(message);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {likeCount >= 0 && (
        <span style={{ position:'absolute',
          top:"190px",
          right:'70px',
          fontSize:'14px'
         }}>
          <Rating likeCount={likeCount}/>
        </span>
      )}
      <div style={{ position: 'relative', marginLeft: '2px' }}>
        <button
          onClick={toggleLike}
          disabled={isLoading}
          style={{
            background: 'none',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            color: isLiked ? 'black' : '#888',
            overflow:'hidden'
          }}
        >
          <FaHeart size={18}/>
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
