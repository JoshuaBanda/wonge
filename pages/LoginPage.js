import Image from 'next/image';
import { useState } from 'react';
import LoginPart from '../pages/LoginPart'
import { motion } from 'framer-motion';
import SignUpPage from './userAunthentication/SignUpPage';
export default function LoginPage() {
  // State to manage the widths, border radius, zIndex, position offsets, and selected side
  const [state, setState] = useState({
    leftWidth: '80%',  // Initial width for the left item
    rightWidth: '20%', // Initial width for the right item
    leftRadius: '20px',  // Border radius for the left item
    rightRadius: '20px', // Border radius for the right item
    leftZIndex: 1,   // zIndex for the left item
    rightZIndex: 0,  // zIndex for the right item
    leftPosition: '0px', // Initial position for the left item
    rightPosition: '0px', // Initial position for the right item
    selectedSide: null,  // State to track which side is selected ('left' or 'right')
  });

  // Function to handle the click event and change widths, border radius, zIndex, and position
  const handleSelect = (side) => {
    if (side === 'left') {
      setState({
        ...state,
        leftWidth: '90%',
        rightWidth: '10%',
        leftRadius: '20px',
        rightRadius: '20px',
        leftZIndex: 1,
        rightZIndex: 0,
        leftPosition: '10px',
        rightPosition: '0px',
        selectedSide: 'left',  // Mark left side as selected
      });
    } else {
      setState({
        ...state,
        leftWidth: '10%',
        rightWidth: '90%',
        leftRadius: '20px',
        rightRadius: '20px',
        leftZIndex: 0,
        rightZIndex: 1,
        leftPosition: '0px',
        rightPosition: '10px',
        selectedSide: 'right',  // Mark right side as selected
      });
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        overflow: 'hidden', // Ensure nothing overflows outside the container
      }}
    >
      {/* The background image with blur effect */}
      <Image
        src="/wonge2.jpg"
        alt="loginimage"
        fill
        priority
        quality={80}
        style={{
          objectFit: 'cover', // Cover the entire area
          filter: 'blur(1px)', // Apply blur effect to the background image only
          zIndex: -1, // Ensure the image stays in the background
        }}
      />

      {/* Dark overlay on top of the blurred image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with transparency
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0, // Overlay stays on top of the blurred image
        }}
      >
        <ul
          style={{
            position: 'relative',
            display: 'flex',
            listStyle: 'none',
            padding: '0px',
            height: '450px',
            width: '90%',
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          <li
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              margin: '0px',
              width: state.leftWidth,
              height: '100%',
              transition: 'width 0.3s ease, right 0.3s ease',
              borderTopLeftRadius: state.leftRadius,
              borderBottomLeftRadius: state.leftRadius,
              textAlign: 'center',
              zIndex: state.leftZIndex,
              position: 'relative',
              left: state.leftPosition,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={() => handleSelect('left')}
          >
            {/* Default content for the left side */}
            {state.selectedSide === 'left' || state.selectedSide === null ? (
              <div>
              <motion.div 
              
              initial={{ opacity: 0, x:-600 }}
                animate={{ opacity: 1,x:0 }}
                transition={{
                    type: 'spring', stiffness: 20,
                }}>
                
                <LoginPart/>
              </motion.div>
              </div>
            ) : (
              <div>
                <p>Login</p>
              </div>
            )}
          </li>

          <li
            style={{
              backgroundColor: 'wheat',
              margin: '0px',
              width: state.rightWidth,
              height: '100%',
              transition: 'width 0.3s ease, left 0.3s ease',
              borderTopRightRadius: state.rightRadius,
              borderBottomRightRadius: state.rightRadius,
              textAlign: 'center',
              zIndex: state.rightZIndex,
              position: 'relative',
              right: state.rightPosition,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={() => handleSelect('right')}
          >
            {/* Content for the right side */}
            {state.selectedSide === 'right' ? (
              <div>
                
                <motion.div 
                
                initial={{ opacity: 0, x:600 }}
                  animate={{ opacity: 1,x:0 }}
                  transition={{
                      type: 'spring', stiffness: 20,
                  }}>
                  <SignUpPage/>
                </motion.div>
              </div>
            ) : (
              <div>
                <p>SignUp</p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
