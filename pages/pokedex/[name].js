import Pokemon from '@components/Pokemon';
import axios from 'axios';

const PokemonDetails = ({ data }) => {
  return <Pokemon {...{ ...data }} />;
};

export const getStaticPaths = async () => {
  const res = await axios('https://pokeapi.co/api/v2/pokemon?limit=300');
  const { results } = await res.data;

  const paths = results.map(({ name }) => ({
    params: { name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const pokemon = await axios(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  );

  const species = await axios(
    `https://pokeapi.co/api/v2/pokemon-species/${params.name}`
  );

  if (!pokemon || !species) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: {
        pokemon: pokemon.data,
        species: species.data,
      },
    },
  };
};

export default PokemonDetails;
