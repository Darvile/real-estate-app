import React from 'react';
import { currencyFormatter } from 'utils';
import { IProperty } from './types';
import Card from '../Card';
import Text from '../Text';
import Circle from '../Circle';
import styles from './Property.module.css';

function Property(props: IProperty) {
  const {
    status,
    street,
    suburb,
    state,
    postcode,
    price,
    image,
    ...rest
  } = props;

  function renderStatus() {
    switch (status) {
      case 'sold':
        return 'disabled';
      case 'off_market':
        return 'error';
      case 'withdrawn':
        return 'warning';
      default:
        return 'success';
    }
  }

  return (
    <Card
      {...rest}
      data-testid="property-item"
      header={
        <>
          <Text as="p">{currencyFormatter.format(price)}</Text>
          <div className={styles.topRight}>
            <Text as="p">{status}</Text>

            <div className={styles.topRightLast}>
              <Circle size="sm" bg={renderStatus()} />
            </div>
          </div>
        </>
      }
      imgSrc={image}
      footer={
        <>
          <Text as="h2">{street}</Text>
          <Text as="p">{suburb}</Text>
          <Text as="p">
            {postcode} - {state}
          </Text>
        </>
      }
    />
  );
}

export default Property;
