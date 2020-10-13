import React from 'react';
import Text from 'components/Text';
import styles from './ErrorScreen.module.css';
import { IErrorScreen } from './types';
import Backdrop from '../Backdrop';
import Button from '../Button';

const ErrorScreen: React.FC<IErrorScreen> = ({ message, reload }) => (
  <Backdrop>
    <div className={styles.wrapper}>
      <Text color="white" as="p">
        {message}
      </Text>
      <Button onClick={reload}>Reload</Button>
    </div>
  </Backdrop>
);

export default ErrorScreen;
