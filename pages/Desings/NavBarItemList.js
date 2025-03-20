import React, { useState, useEffect } from 'react';
import styles from '../../styles/navBarListItem.module.css'; // Ensure the path is correct
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const NavBarItemList = () => {
    const [items, setItems] = useState([
        { id: 1, src: '/avon_with_no_bg.png', alt: 'Avon Lotion', text: 'Avon Lotion' },
        { id: 2, src: '/perfume_with_no_bg.png', alt: 'Perfume', text: 'Perfume' },
        { id: 3, src: '/earring3.png', alt: 'Earrings', text: 'Earrings' },
        { id: 4, src: '/brooch_with_no_bg.png', alt: 'Brochures', text: 'Brochures' },
        
        { id: 5, src: '/perfume_with_no_bg.png', alt: 'Perfume', text: 'Soap' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((prevItems) => {
                const [first, ...rest] = prevItems;
                return [...rest, first]; // Move the first item to the end
            });
        }, 13000); // Rotate every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className={styles.container}>
            <motion.ul className={styles.listItems}>
                <AnimatePresence>
                    {items.map((item, index) => (
                        <motion.li
                            key={item.id}
                            layout
                            initial={{ opacity: 0, x: 200, y: 0 }} // Start off to the right
                            animate={{
                                opacity: 1,
                                scale: index === 0 ? 1 : 0.5, // Scale only the middle item (index 1)
                                y: 
                                index === 0 ? 100: 
                                index === 1 ? 0 : 
                                    index === 2 ? -30 : 
                                    index === 3 ? 180 : 
                                    index === 4 ? 150 : 
                                    100,
                                x:
                                index === 0 ? 80 : 
                                 index === 1 ? 10 : 
                                    index === 2 ?-50 : 
                                    index === 3 ? -175 : 
                                    index===4?-380:0
                                
                            }}
                            exit={{ 
                                opacity:index===3?0:1,
                             x: 100, scale: 0.5 }} // Exit to the right
                            transition={{
                                duration: 1, // Duration of animation
                                ease: "linear", // Linear easing for smooth transition
                            }}
                        >
                            <div
                                className={styles.item}
                                style={{
                                    position: index === 1 ? 'relative' : 'static', // Allow overflow only for index 1
                                    overflow: index === 1 ? 'visible' : 'hidden', 
                                    zIndex: index === 1 ? 1 : 0, // Ensure the item at index 1 stays on top
                                }}
                            >
                                <div className={styles.photoContainer}>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        layout="fill"
                                        quality={80}
                                        priority
                                        style={{ objectFit: 'cover' }} // Ensures the image covers the container
                                    />
                                </div>
                                <div style={{alignContent:'center'}}>
                                {index === 0 ? (
                                    <>
                                        <p>{item.text}</p>
                                    </>
                                    ) : (
                                    <></>
                                    )}

                                </div>
                            </div>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </motion.ul>
            <div className={styles.halfCircle}>
            <Image
                src='/wonge5_with_no_bg.png'
                alt='half'
                layout="fill"
                quality={80}
                priority
                style={{ objectFit: 'cover', overflow:'hidden' }} // Ensures the image covers the container
            />

            </div>
        </div>
    );
};

export default NavBarItemList;
