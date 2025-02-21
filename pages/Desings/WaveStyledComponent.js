import React, { useState } from "react";
import styles from "../../styles/WaveStyleContainer.module.css"; // Import CSS Module

const WaveStyledComponent = () => {
    const [isSearching, setIsSearching] = useState(false);

    return (
        <div>
            <div className={styles.wrapper}>
                {/* Using the CSS module class for the wave container */}
                <div className={styles.waveContainer}></div>

                <div className={styles.waveContainer}></div>

                <div className={styles.waveContainer}></div>
            </div>
        </div>
    );
};

export default WaveStyledComponent;
