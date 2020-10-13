import React from 'react';
import styles from './Card.module.css';
import { ICard } from './types';

const Card: React.FC<ICard> = ({
  header,
  footer,
  content,
  imgSrc,
  ...rest
}) => (
  <>
    <div {...rest} className={styles.wrapper}>
      <div className={styles.header}>{header}</div>

      <div className={styles.content}>
        <picture className={styles.image}>
          <img src={imgSrc} alt="Rental property" />
        </picture>

        {content}
      </div>

      <div className={styles.footer}>{footer}</div>
    </div>
  </>
);

export default Card;
