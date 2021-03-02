import { useGlobal } from '@/hooks/useGlobal';
import React from 'react';
import styles from './home.module.less';

const Home = () => {
  const global = useGlobal();

  return (
    <div className={styles.page}>
      <h3 className={styles.title}>{global.appName}</h3>
    </div>
  );
};

export default Home;
