import { HasChildren } from '../../types';

export interface IErrorScreen extends HasChildren {
  message: string;
  reload: () => void;
}