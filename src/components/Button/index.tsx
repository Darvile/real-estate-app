import React from 'react';
import clsx from 'clsx';
import { IButton } from './types';
import styles from './Button.module.css';

function ButtonModel(
  { id, onClick, className, children, ...rest }: IButton,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <div>
      <button
        type="button"
        ref={ref}
        id={id}
        onClick={onClick}
        className={clsx(styles.wrapper, className)}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
}

const Button = React.forwardRef<HTMLButtonElement, IButton>(
  ButtonModel
) as typeof ButtonModel;

export default Button;
