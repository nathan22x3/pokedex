import '@styles/globals.scss';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1, maximum-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
