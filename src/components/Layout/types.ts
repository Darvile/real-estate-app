import React from 'react';
import { ColorProps, HasChildren } from '../../types';

export interface ILayout extends HasChildren, ColorProps {
  position?: string;
  className?: string;
  header?: React.ReactNode;
}