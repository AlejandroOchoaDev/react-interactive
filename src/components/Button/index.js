import React from 'react';

import styles from './index.module.css';

const Button = ({ text }) => (
  <button className={`${styles.button} ${styles.isSuccess} col-sm-8`}>
    { text }
  </button>
);

export default Button;
