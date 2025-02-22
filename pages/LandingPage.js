import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Import Next.js Link
import { useRouter } from 'next/router';

const LandingPage = () => {
    
      const router = useRouter();


    const handleRouter=()=>{
        router.push('/LoginPage')
        console.log('routingg');
    }
    return (
        <>
            {/* Overlay for black color with opacity */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black background with 50% opacity
                zIndex: 10, // Ensures it is above other content
            }}></div>

            {/* Welcome text */}
            <div style={{
                position: 'fixed',
                top: '30%',
                left: '40%',
                transform: 'translate(-50%, -50%)',
                fontSize: '3rem', // Adjust font size as needed
                color: 'white',
                fontWeight: 'bold',
                zIndex: 20, // Ensures the text appears above the overlay
            }}>
                WELCOME TO WONGE ENERPRISE
            </div>

            {/* Link with adjusted styling */}
            <div
                style={{
                    position: 'absolute',
                    top: '90%', // Adjust the position to be below the welcome text
                    left: '50%',
                    transform: 'translateX(-50%)', // Center the link horizontally
                    height: '40px',
                    width: '300px', // Adjust width for the link
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: '',
                    lineHeight: '30px', // Vertically center the text
                    borderRadius: '25px', // Optional: adds rounded corners
                    cursor: 'pointer', // Change cursor to pointer to show it’s clickable
                    zIndex: 20, // Ensure it appears above the overlay and below the welcome text
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >

      <motion.div
       onClick={handleRouter}
        style={{
          left: '50%',
          transform: 'translateX(-50%)', // Center the link horizontally
          height: '40px',
          width: '300px', // Adjust width for the link
          textAlign: 'center',
          color: 'white',
          lineHeight: '30px', // Vertically center the text
          borderRadius: '25px', // Optional: adds rounded corners
          cursor: 'pointer', // Change cursor to pointer to show it’s clickable
          zIndex: 20, // Ensure it appears above the overlay and below the welcome text
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // Center the text inside the link
          border: '3px solid transparent', // Set an initial transparent border
          fontSize: '22px',
          position: 'relative', // Ensure correct positioning for the animation
          overflow: 'hidden', // Ensures border does not exceed the element’s boundary
          animation: 'borderAnimation 2s linear infinite', // Apply the animation
        }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1, }}
        transition={{ delay: 3 }}
      >
      <div>
        Continue
      </div>

        <style jsx>{`
          @keyframes borderAnimation {
            0% {
              border-color: transparent;
            }
            50% {
              border-color: white;
              border-width: 3px;
            }
            100% {
              border-color: transparent;
            }
          }
        `}</style>
      </motion.div>

            </div>

            {/* Main container with flex layout */}
            <div style={{ display: 'flex' }}
            >
                {/* Left side container */}
                <div style={{
                    margin: '2px',
                    height: '150px',
                    width: '50%',
                    borderRadius: '10px',
                    position: 'relative', // Ensure the container has relative positioning
                }}
                >
                    {/* Inner container with background */}
                    <motion.div style={{
                        margin: '2px',
                        height: '145px',
                        width: '98%',
                        backgroundColor: 'grey',
                        borderRadius: '10px',
                        position: 'relative', // Position relative for fill to work
                        overflow:'hidden'
                    }}
                    
                    initial={{ y: -700 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 40, duration: 50, repeat: 2, repeatType: 'reverse',delay:3
                    }}
                    >
                        <Image
                            src='/wonge1.jpg'
                            alt='image1'
                            fill
                            quality={80}
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                    </motion.div>

                    {/* Inner container with background */}
                    <div style={{
                        margin: '2px',
                        height: '145px',
                        width: '98%',
                        backgroundColor: '',
                        borderRadius: '10px',
                        display: "flex",
                        position: 'relative', // Position relative for fill to work
                    }}>
                        <motion.div style={{
                            margin: '2px',
                            height: '145px',
                            width: '50%',
                            backgroundColor: 'grey',
                            borderRadius: '10px',
                            position: 'relative', // Position relative for fill to work
                            overflow:'hidden'
                        }}
                    
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: 'spring', stiffness: 40, duration: 50, repeat: 2, repeatType: 'reverse',delay:3
                    }}
                        >
                            <Image
                                src='/wonge6.jpg'
                                alt='image6'
                                fill
                                quality={80}
                                priority
                                style={{ objectFit: 'cover' }}
                            />
                        </motion.div>

                        <motion.div style={{
                            margin: '2px',
                            height: '145px',
                            width: '50%',
                            backgroundColor: 'grey',
                            borderRadius: '10px',
                            position: 'relative', // Position relative for fill to work
                            overflow:'hidden'
                        }}
                    
                    initial={{ y: -800 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 45, duration: 50, repeat: 2, repeatType: 'reverse',delay:3
                    }}
                        >
                            <Image
                                src='/wonge7.jpg'
                                alt='image1'
                                fill
                                quality={80}
                                priority
                                style={{ objectFit: 'cover' }}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Right side container */}
                <motion.div style={{
                    margin: '2px',
                    height: '300px',
                    width: '50%',
                    backgroundColor: 'grey',
                    borderRadius: '10px',
                    position: 'relative', // Position relative for fill to work
                    overflow:'hidden'
                }}
                    initial={{ y: -700 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 40, duration: 50, repeat: 2, repeatType: 'reverse',delay:3
                    }}
                >
                    <Image
                        src='/wonge9.jpg'
                        alt='image4'
                        fill
                        quality={80}
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
            </div>

            {/* Second flex container */}
            <div style={{ display: 'flex' }}
            >
                {/* Left side container */}
                <motion.div style={{
                    margin: '2px',
                    height: '400px',
                    width: '50%',
                    backgroundColor: 'grey',
                    borderRadius: '10px',
                    position: 'relative', // Position relative for fill to work
                    overflow:'hidden'
                }}
                    initial={{ y: 700 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 70, duration: 50, repeat: 2, repeatType: 'reverse',delay:3
                    }}
                >
                    <Image
                        src='/wonge2.jpg'
                        alt='image2'
                        fill
                        quality={80}
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>

                {/* Right side container with nested divs */}
                <div style={{
                    margin: '2px',
                    height: '400px',
                    width: '50%',
                    borderRadius: '10px',
                    position: 'relative', // Position relative for fill to work
                }}
                >
                    {/* Inner container with background */}
                    <motion.div style={{
                        margin: '2px',
                        height: '150px',
                        width: '98%',
                        backgroundColor: 'grey',
                        borderRadius: '10px',
                        position: 'relative', // Position relative for fill to work
                        overflow:'hidden'
                    }}
                    initial={{ x: 700 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: 'spring', stiffness: 40, duration: 70, repeat: 2, repeatType: 'reverse',delay:3
                    }}
                    >
                        <Image
                            src='/wonge8.jpg'
                            alt='image1'
                            fill
                            quality={80}
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                    </motion.div>

                    {/* Inner container with background */}
                    <motion.div style={{
                        margin: '2px',
                        height: '145px',
                        width: '98%',
                        backgroundColor: 'grey',
                        borderRadius: '10px',
                        position: 'relative', // Position relative for fill to work
                        overflow:'hidden'
                    }}
                    initial={{ x: 700 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: 'spring', stiffness: 35, duration: 70, repeat: 2, repeatType: 'reverse',delay:3
                    }}>
                        <Image
                            src='/wonge3.jpg'
                            alt='image1'
                            fill
                            quality={80}
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                    </motion.div>{/* Inner container with background */}
                    <motion.div style={{
                        margin: '2px',
                        height: '95px',
                        width: '98%',
                        backgroundColor: 'grey',
                        borderRadius: '10px',
                        position: 'relative', // Position relative for fill to work
                        overflow:'hidden'
                    }}
                    initial={{ x: 700 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: 'spring', stiffness: 30, duration: 70, repeat: 2, repeatType: 'reverse',delay:3
                    }}>
                        <Image
                            src='/wonge2.jpg'
                            alt='image1'
                            fill
                            quality={80}
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
