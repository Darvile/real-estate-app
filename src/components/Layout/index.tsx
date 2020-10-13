import React from 'react';
import Header from 'components/Header';
import styles from './AppLayout.module.css';
import { ILayout } from './types';

const Layout: React.FC<ILayout> = ({ header, children }) => (
  <section className={styles.wrapper}>
    <div className={styles.header}>
      <Header bg="primary" position="end">
        {header}
      </Header>
    </div>

    <main className={styles.content}>{children}</main>
  </section>
);

export default Layout;
