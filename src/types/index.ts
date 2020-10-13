import React from 'react';
import { IProperty } from 'components/Property/types';

export interface BaseProps {
  value?: unknown;
}

export interface ColorProps extends BaseProps {
  variant?: 'color';
  bg?: string;
  color?: string;
}

export interface HasChildren {
  children?: React.ReactNode;
}

export type IProperties = IProperty[];
