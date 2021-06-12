import Body from '@components/Pokemon/Body';
import Header from '@components/Pokemon/Header';
import styles from '@components/Pokemon/Pokemon.module.scss';
import Head from 'next/head';
import { capitalize } from 'utils';
import { motion } from 'framer-motion';
import { pokemon as animation } from '@components/Pokemon/animation';

const Pokemon = ({ pokemon, breeding }) => {
  const { id, name, types, sprites, height, weight, abilities } = pokemon;

  return (
    <>
      <Head>
        <title>{capitalize(name)} | Pokedex</title>
      </Head>

      <motion.div
        className={styles.container}
        variants={animation.container}
        initial='init'
        animate='show'
        data-color={types[0].type.name}
      >
        <Header {...{ data: { id, name, types } }} />
        <Body
          {...{ data: { name, sprites, height, weight, abilities, breeding } }}
        />
      </motion.div>
    </>
  );
};

export default Pokemon;
