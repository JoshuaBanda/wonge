import React from 'react';
import styles from '../../styles/listItem.module.css'; // Correct path to your CSS module
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';

const ItemList = () => {
    return (
        <motion.div className={styles.container} 
                
            
        >
            <ul className={styles.listItems}>
                <li>
                    <div className={styles.item}>
                        <div className={styles.photoContainer}>
                            <Image
                                src='/lotion.jpg'
                                alt='Earrings'
                                layout='fill'
                                quality={80}
                                priority
                                style={{ objectFit: 'cover' }} // Ensures the image covers the container
                            />
                        </div>
                        <p>Avon Lotion</p>
                    </div>
                </li>
                <li>
                    <div className={styles.item}>
                        <div className={styles.photoContainer}>
                            <Image
                                src='/perfume.jpg'
                                alt='Earrings'
                                layout='fill'
                                quality={80}
                                priority
                                style={{ objectFit: 'cover' }} // Ensures the image covers the container
                            />
                        </div>
                        <p>Perfume</p>
                    </div>
                </li>
                <li>
                    <div className={styles.item}>
                        <div className={styles.photoContainer}>
                            <Image
                                src='/earring.jpg'
                                alt='Earrings'
                                layout='fill'
                                quality={80}
                                priority
                                style={{ objectFit: 'cover' }} // Ensures the image covers the container
                            />
                        </div>
                        <p>Earrings</p>
                    </div>
                </li>
                <li>
                    <div className={styles.item}>
                        <div className={styles.photoContainer}>
                            <Image
                                src='/brochus.jpg'
                                alt='Earrings'
                                layout='fill'
                                quality={80}
                                priority
                                style={{ objectFit: 'cover' }} // Ensures the image covers the container
                            />
                        </div>
                        <p>Bronchus</p>
                    </div>
                </li>
            </ul>    
        </motion.div>
    );
};

export default ItemList;
