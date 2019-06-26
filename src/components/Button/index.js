import React from 'react';

import styles from './index.module.css';

const Button = ({ text, onClick}) => (
  <button className={`${styles.button} ${styles.isSuccess} col-sm-8`} onClick={onClick}>
    { text }
  </button>
);

export default Button;
