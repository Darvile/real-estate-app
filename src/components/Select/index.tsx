import React from 'react';
import clsx from 'clsx';
import { ISelect } from './types';
import styles from './Select.module.css';

function SelectModel(
  { id, onChange, options, className, value, label, ...rest }: ISelect,
  ref: React.Ref<HTMLSelectElement>
) {
  return (
    <div>
      <label className={clsx(styles.label, className)} htmlFor={id}>
        {label}
      </label>

      <select
        ref={ref}
        id={id}
        value={value}
        onChange={(event) => {
          event.persist();
          onChange(event);
        }}
        className={clsx(styles.wrapper, className)}
        {...rest}
      >
        {options.map((option) => (
          <option data-testid="select-option" key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

const Select = React.forwardRef<HTMLSelectElement, ISelect>(
  SelectModel
) as typeof SelectModel;

export default Select;
