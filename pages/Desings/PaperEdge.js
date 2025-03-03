import React from 'react';
import styles from '../../styles/PaperText.module.css'; 

function PaperText() {
  return (
    <div className={styles.paperWrapper}>
      <p className={styles.cutEdgeText} style={{color:'sienna'}}>
        What Are You Looking For?
      </p>
    </div>
  );
}

export default PaperText;