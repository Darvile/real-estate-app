import { ColorProps, HasChildren } from '../../types';

export interface IHeader extends HasChildren, ColorProps {
  position?: string;
  className?: string;
}