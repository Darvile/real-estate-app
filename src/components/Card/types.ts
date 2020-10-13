import React  from 'react';

export type ICard = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  content?: React.ReactNode;
  imgSrc?: string;
};