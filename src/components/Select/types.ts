import React  from 'react';

type SelectOption = string;

type SelectOptions = SelectOption[];

export interface ISelect {
  options: SelectOptions,
  id?: string;
  label?: string;
  value?: string;
  className?: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
}