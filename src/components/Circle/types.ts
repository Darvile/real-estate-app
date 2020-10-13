import { ColorProps } from '../../types';

export interface ICircle extends ColorProps {
  size: 'sm' | 'md' | 'lg';
  className?: string;
}