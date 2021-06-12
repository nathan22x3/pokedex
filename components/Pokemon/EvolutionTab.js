import { body as animation } from '@components/Pokemon/animation';
import styles from '@components/Pokemon/Pokemon.module.scss';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const EvolutionTab = ({ evolution_chain }) => {
  const [evolutionChain, setEvolutionChain] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(evolution_chain.url);
      const chain = [];

      (function recursive(obj) {
        if (obj.evolves_to.length) {
          chain.push({
            evolution_details: obj.evolves_to[0].evolution_details,
            species: obj.evolves_to[0].species,
          });
          recursive(obj.evolves_to[0]);
        }
      })(res.data.chain);

      setEvolutionChain(chain);
    })();
  }, []);

  console.log(evolutionChain);

  return (
    <>
      <motion.h3
        variants={animation.content}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
      >
        Evolution Chain
      </motion.h3>
      <motion.section
        className={styles.tabContent}
        variants={animation.content}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
      ></motion.section>
    </>
  );
};

export default EvolutionTab;
