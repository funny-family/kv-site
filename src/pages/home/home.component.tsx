import type { NextPage } from 'next';
import styles from './home.module.scss';
import { NoiseBackground } from '@/shared/components/noise-background/noise-background.component';

const Home: NextPage = () => {
  const className = styles.page;

  return (
    <div className={className}>
      <h1>This is Home page!</h1>

      <NoiseBackground
        className={styles.page__background}
        aria-hidden={true}
        role="presentation"
      />
    </div>
  );
};

export default Home;
