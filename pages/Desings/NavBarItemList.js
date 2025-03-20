import React, { useState, useEffect } from 'react';
import styles from '../../styles/navBarListItem.module.css'; // Ensure the path is correct
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const NavBarItemList = () => {
    const [items, setItems] = useState([
        { id: 1, src: '/lotion.jpg', alt: 'Avon Lotion', text: 'Avon Lotion' },
        { id: 2, src: '/perfume.jpg', alt: 'Perfume', text: 'Perfume' },
        { id: 3, src: '/earring3.png', alt: 'Earrings', text: 'Earrings' },
        { id: 4, src: '/brochus.jpg', alt: 'Brochures', text: 'Brochures' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((prevItems) => {
                const [first, ...rest] = prevItems;
                return [...rest, first]; // Move the first item to the end
            });
        }, 3000); // Rotate every 3 seconds

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
                                x: -100,
                                scale: index === 1 ? 1 : 0.5, // Scale only the middle item (index 1)
                                y: index === 1 ? 50 : index === 2 ? 0 : -150, // Handle vertical position for each index
                            }}
                            exit={{ opacity: 0, x: 100, scale: 0.5 }} // Exit to the right
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
                                <p>{item.text}</p>
                            </div>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </motion.ul>
        </div>
    );
};

export default NavBarItemList;
