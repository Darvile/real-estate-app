import React from 'react';
import clsx from 'clsx';
import helperStyles from 'globals/helpers.module.css';
import { IHeader } from './types';
import styles from './Header.module.css';

const Header: React.FC<IHeader> = ({
  children,
  position,
  bg,
  color,
  className,
  ...rest
}) => (
  <header
    role="heading"
    aria-level={1}
    className={clsx(
      styles.wrapper,
      color && helperStyles[color],
      position && helperStyles[position],
      bg && helperStyles[`bg-${bg}`],
      className
    )}
    {...rest}
  >
    {children}
  </header>
);

export default Header;
