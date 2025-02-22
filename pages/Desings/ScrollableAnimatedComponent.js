import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const ScrollAnimatedComponent = () => {
  // Hook for intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once when the element enters the viewport
    threshold: 0.5, // Animation will trigger when 50% of the element is in view
  });

  return (
    <motion.div
      style={{
        position: 'relative',
        margin: '-30px 0px 150px 50px',
        fontFamily: 'DM Sans, sans-serif',
        color: '#333',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
      }}
    >
      Shopping made easy
      <div
        style={{
          position: 'relative',
          margin: '20px auto', // Center the button horizontally
          width: '150px',
          height: '45px',
          borderRadius: '25px',
          color: 'white',
          backgroundColor: '#000', // Dark background
          display: 'flex',
          justifyContent: 'center', // Center the text inside button
          alignItems: 'center', // Vertically center the text
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Shadow for depth
          transition: 'all 0.3s ease', // Smooth transition for hover effects
          fontSize: '20px',
        }}
      >
        <div
          style={{
            position: 'relative',
            margin: '5px',
            fontSize: '16px',
            fontWeight: '600', // Slightly bolder text inside button
          }}
        >
          Start Now
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollAnimatedComponent;
