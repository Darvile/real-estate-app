import React  from 'react';
import { HasChildren } from '../../types';

export interface IButton extends HasChildren{
  id?: string;
  className?: string;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}