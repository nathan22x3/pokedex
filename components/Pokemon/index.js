import { pokemon as animation } from '@components/Pokemon/animation';
import Body from '@components/Pokemon/Body';
import Header from '@components/Pokemon/Header';
import styles from '@components/Pokemon/Pokemon.module.scss';
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
        variants={animation.container}
        initial='init'
        animate='show'
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
