import React from 'react';
import { chunk } from 'lodash';
import { Col, Grid, Row } from 'react-flexbox-grid';
import styles from './List.module.css';
import { IListProps } from './types';
import Property from '../Property';

const List: React.FC<IListProps> = ({ items, colNumber, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <Grid {...rest}>
        {chunk(items, colNumber).map((row, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Row key={`row-${idx}`}>
            {row.map((item) => (
              <Col key={`col-${item.id}`} sm={6} lg={3}>
                <Property {...item} />
              </Col>
            ))}
          </Row>
        ))}
      </Grid>
    </div>
  );
};

export default List;
