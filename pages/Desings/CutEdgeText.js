import React from 'react';
import styles from '../../styles/CutEdgeText.module.css'; // Import the CSS Module

function CutEdgeText() {
  return (
    <div className={styles.paperWrapper}>
      <p className={styles.cutEdgeText} style={{color:'sienna'}}>
        View
      </p>
    </div>
  );
}

export default CutEdgeText;


