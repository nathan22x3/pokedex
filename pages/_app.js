import '@styles/globals.scss';
import { AnimateSharedLayout } from 'framer-motion';
import Head from 'next/head';

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1, maximum-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
      </Head>
      <AnimateSharedLayout>
        <Component key={router.route} {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
};

export default App;
