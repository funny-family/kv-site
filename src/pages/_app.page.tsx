import '@/shared/styles/main.scss';
import type { FC } from 'react';
import type { AppProps } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
