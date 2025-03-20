import Image from 'next/image';
import { useState } from 'react';
import LoginPart from '../pages/LoginPart';
import { motion } from 'framer-motion';
import SignUpPage from './userAunthentication/SignUpPage';

export default function LoginPage() {
  const [state, setState] = useState({
    leftWidth: '80%',
    rightWidth: '20%',
    leftRadius: '20px',
    rightRadius: '20px',
    leftZIndex: 1,
    rightZIndex: 0,
    leftPosition: '0px',
    rightPosition: '0px',
    selectedSide: null,
  });

  const handleSelect = (side) => {
    
    console.log('side :',side)
    if (side === 'left') {
      
    console.log('properties left',state)
      setState({
        ...state,
        leftWidth: '80%',
        rightWidth: '20%',
        leftRadius: '20px',
        rightRadius: '20px',
        leftZIndex: 1,
        rightZIndex: 0,
        leftPosition: '10px',
        rightPosition: '0px',
        selectedSide: 'left',
      });
    } else {
      //console.log('properties right',state)
      setState({
        ...state,
        leftWidth: '25%',
        rightWidth: '75%',
        leftRadius: '20px',
        rightRadius: '20px',
        leftZIndex: 0,
        rightZIndex: 1,
        leftPosition: '0px',
        rightPosition: '10px',
        selectedSide: 'right',
      });
    }
  };

  const handleDragEnd = (event, info) => {
    // Determine the direction of the swipe
    if (info.offset.x > 50) {
      // Swipe right
      handleSelect('left');
    } else if (info.offset.x < -50) {
      // Swipe left
      handleSelect('right');
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/wonge2.jpg"
        alt="loginimage"
        fill
        priority
        quality={80}
        style={{
          objectFit: 'cover',
          filter: 'blur(1px)',
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0,
        }}
      >
        <motion.ul
          style={{
            position: 'relative',
            display: 'flex',
            listStyle: 'none',
            padding: '0px',
            height: '450px',
            width: '90%',
            alignItems: 'stretch',
          }}
        >
          <motion.li
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
            drag="x" // Enable horizontal dragging
            dragConstraints={{ left: 0, right: 0 }} // Restrict dragging to the horizontal axis
            onDragEnd={handleDragEnd} // Handle drag end event
          >
            {state.selectedSide === 'left' || state.selectedSide === null ? (
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 20,
                }}
              >
                <LoginPart />
              </motion.div>
            ) : (
              <div>
                <p style={{color:'white'}}>Login</p>
              </div>
            )}
          </motion.li>

          <motion.li
            style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
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
            drag="x" // Enable horizontal dragging
            dragConstraints={{ left: 0, right: 0 }} // Restrict dragging to the horizontal axis
            onDragEnd={handleDragEnd} // Handle drag end event
          >
            {state.selectedSide === 'right' ? (
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 20,
                }}
              >
                <SignUpPage />
              </motion.div>
            ) : (
              <div>
                <p style={{color:'sienna'}}>SignUp</p>
              </div>
            )}
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}