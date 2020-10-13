import { HasChildren } from '../../types';
import { IProperty } from '../Property/types';

export interface IListProps extends HasChildren {
  items: IProperty[];
  colNumber: number;
}