import Button from '@components/Button';
import Searchbar from '@components/Searchbar';
import styles from '@styles/Home.module.scss';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.container}>
        <h2>
          What Pokemon <br /> are you looking for?
        </h2>
        <Searchbar />
        <section className={styles.categories}>
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
        </section>
      </main>
    </>
  );
};

export default Home;
