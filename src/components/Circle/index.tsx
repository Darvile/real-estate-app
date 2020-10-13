import React from 'react';
import clsx from 'clsx';
import styles from './Circle.module.css';
import { ICircle } from './types';
import helperStyles from '../../globals/helpers.module.css';

const Circle: React.FC<ICircle> = ({ size = 'sm', bg, className }) => (
  <>
    <div
      className={clsx(
        styles.wrapper,
        styles[`circle-${size}`],
        bg && helperStyles[`bg-${bg}`],
        className
      )}
    />
  </>
);

export default Circle;
