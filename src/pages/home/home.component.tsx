import type { NextPage } from 'next';
import styles from './home.module.scss';

const Home: NextPage = () => {
  const className = styles.root;

  return (
    <div className={className}>
      This is Home page!
    </div>
  );
};

export default Home;
