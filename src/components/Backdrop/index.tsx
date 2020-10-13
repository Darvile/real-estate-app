import React from 'react';
import styles from './Backdrop.module.css';
import { IBackdrop } from './types';

const Backdrop: React.FC<IBackdrop> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Backdrop;
