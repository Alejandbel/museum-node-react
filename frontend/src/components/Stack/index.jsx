import React from 'react';
import styles from './styles.module.css';

function Stack({ children }) {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  );
}

export default Stack;
