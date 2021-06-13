import Button from '@components/Button';
import Searchbar from '@components/Searchbar';
import styles from '@styles/Home.module.scss';
import Head from 'next/head';
import { motion } from 'framer-motion';
import variants from '@variants/home';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <motion.main
        className={styles.container}
        variants={variants.container}
        initial='init'
        animate='show'
        exit='exit'
      >
        <h2>
          What Pokemon <br /> are you looking for?
        </h2>
        <Searchbar />
        <motion.section
          className={styles.categories}
          variants={variants.buttons}
        >
          <Button href='/pokedex' color='grass'>
            Pokedex
          </Button>
          <Button href='/moves' color='fire'>
            Moves
          </Button>
          <Button href='/abilities' color='water'>
            Abilities
          </Button>
          <Button href='/items' color='electric'>
            Items
          </Button>
          <Button href='/locations' color='psychic'>
            Locations
          </Button>
          <Button href='/type-charts' color='rock'>
            Type Charts
          </Button>
        </motion.section>
      </motion.main>
    </>
  );
};

export default Home;
