import React from 'react';
import SpinnerIcon from 'icons/spinner.svg';
import styles from './Loader.module.css';
import { ILoader } from './types';
import Backdrop from '../Backdrop';

const Loader: React.FC<ILoader> = () => (
  <>
    <div className={styles.wrapper}>
      <Backdrop>
        <img src={SpinnerIcon} alt="Loader" />
      </Backdrop>
    </div>
  </>
);

export default Loader;
