import PokeCard from '@components/PokeCard';
import styles from '@styles/Pokedex.module.scss';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArrowLeft, List } from 'phosphor-react';
import { motion } from 'framer-motion';

const Pokedex = ({ pokedex }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>

      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
      >
        <nav>
          <span className={`button`} onClick={() => router.back()}>
            <ArrowLeft size={30} weight='bold' />
          </span>
          <span className={`button`}>
            <List size={30} weight='bold' />
          </span>
        </nav>
        <main>
          <h1>Pokedex</h1>
          <section className={styles.grid}>
            {pokedex?.map(({ id, name, types, sprites }) => (
              <PokeCard
                key={id}
                {...{
                  id,
                  name,
                  types,
                  image: sprites.other.dream_world.front_default,
                }}
              />
            ))}
          </section>
        </main>
      </motion.div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await axios('https://pokeapi.co/api/v2/pokemon?limit=300');
  const { results } = res.data;

  const pokedex = await Promise.all(
    results.map(async ({ url }) => {
      const res = await axios(url);
      const { data } = res;
      return data;
    })
  );

  return {
    props: { pokedex },
  };
};

export default Pokedex;
