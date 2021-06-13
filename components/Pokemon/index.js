import Body from '@components/Pokemon/Body';
import Header from '@components/Pokemon/Header';
import styles from '@components/Pokemon/Pokemon.module.scss';
import { pokemon as variants } from '@variants/pokemon';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { capitalize } from 'utils';

const Pokemon = ({ pokemon, species, evolution }) => {
  const { id, name, types, sprites, height, weight, abilities, stats } =
    pokemon;

  return (
    <>
      <Head>
        <title>{capitalize(name)} | Pokedex</title>
      </Head>

      <motion.div
        className={styles.container}
        variants={variants.container}
        initial='init'
        animate='show'
        exit='exit'
        data-color={types[0].type.name}
      >
        <Header {...{ data: { id, name, types } }} />
        <Body
          {...{
            data: {
              name,
              sprites,
              height,
              weight,
              abilities,
              species,
              stats,
              evolution,
            },
          }}
        />
      </motion.div>
    </>
  );
};

export default Pokemon;
