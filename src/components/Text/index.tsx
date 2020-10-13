import React from 'react';
import clsx from 'clsx';
import helperStyles from 'globals/helpers.module.css';
import styles from './Text.module.css';
import { IText } from './types';

function TextModel(props: IText, ref: React.Ref<HTMLElement>) {
  const { as, color = 'primary', className, ...rest } = props;

  return React.createElement(as, {
    ...props,
    ...rest,
    className: clsx(
      {
        [styles[as]]: as,
        [helperStyles[color]]: color,
      },
      className,
      ref
    ),
  });
}

const Text = React.forwardRef<HTMLElement, IText>(
  TextModel
) as typeof TextModel;

export default Text;
