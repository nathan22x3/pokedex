import { pokemon as animation } from '@components/Pokemon/animation';
import Body from '@components/Pokemon/Body';
import Header from '@components/Pokemon/Header';
import styles from '@components/Pokemon/Pokemon.module.scss';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { capitalize, themeColorGenerator } from 'utils';

const Pokemon = ({ pokemon, breeding }) => {
  const { id, name, types, sprites, height, weight, abilities, stats } =
    pokemon;

  return (
    <>
      <Head>
        <meta
          name='theme-color'
          content={themeColorGenerator(types[0].type.name)}
        ></meta>
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
            data: { name, sprites, height, weight, abilities, breeding, stats },
          }}
        />
      </motion.div>
    </>
  );
};

export default Pokemon;
