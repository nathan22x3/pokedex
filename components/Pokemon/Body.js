import Image from '@components/Image';
import AboutTab from '@components/Pokemon/AboutTab';
import styles from '@components/Pokemon/Pokemon.module.scss';
import Tab from '@components/Pokemon/Tab';
import Tabs from '@components/Pokemon/Tabs';
import { body as variants } from '@variants/pokemon';
import { motion } from 'framer-motion';
import React from 'react';
import BaseStatsTab from './BaseStatsTab';
import EvolutionTab from './EvolutionTab';

const Body = ({ data }) => {
  const { name, sprites, height, weight, abilities, species, stats } = data;
  const { gender_rate, egg_groups, genera, evolution_chain } = species;

  return (
    <motion.main className={styles.body} variants={variants.container}>
      <motion.div className={styles.image} variants={variants.image}>
        <Image
          src={sprites.other.dream_world.front_default}
          title={name}
          width={200}
        />
      </motion.div>
      <Tabs>
        <Tab label='About'>
          <AboutTab
            {...{ height, weight, abilities, gender_rate, egg_groups, genera }}
          />
        </Tab>
        <Tab label='Base Stats'>
          <BaseStatsTab {...{ stats }} />
        </Tab>
        <Tab label='Evolution'>
          <EvolutionTab {...{ evolution_chain }}>Evolution</EvolutionTab>
        </Tab>
        <Tab label='Moves'>
          <span>Moves</span>
        </Tab>
      </Tabs>
    </motion.main>
  );
};

export default Body;
