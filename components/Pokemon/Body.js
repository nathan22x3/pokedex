import Image from '@components/Image';
import AboutTab from '@components/Pokemon/AboutTab';
import { body as animation } from '@components/Pokemon/animation';
import styles from '@components/Pokemon/Pokemon.module.scss';
import Tab from '@components/Pokemon/Tab';
import Tabs from '@components/Pokemon/Tabs';
import { motion } from 'framer-motion';
import React from 'react';
import BaseStatsTab from './BaseStatsTab';

const Body = ({ data }) => {
  const { name, sprites, height, weight, abilities, breeding, stats } = data;
  const { gender_rate, egg_groups, genera } = breeding;

  return (
    <motion.main
      className={styles.body}
      variants={animation.container}
      initial='init'
      animate='show'
    >
      <motion.div
        className={styles.image}
        variants={animation.image}
        initial='init'
        animate='show'
      >
        <Image
          src={sprites.other.dream_world.front_default}
          title={name}
          width={200}
        />
      </motion.div>
      <Tabs>
        <Tab label='about'>
          <AboutTab
            {...{ height, weight, abilities, gender_rate, egg_groups, genera }}
          />
        </Tab>
        <Tab label='stats'>
          <BaseStatsTab {...{ stats }} />
        </Tab>
        <Tab label='evolution'>
          <span>Evolution</span>
        </Tab>
        <Tab label='moves'>
          <span>Moves</span>
        </Tab>
      </Tabs>
    </motion.main>
  );
};

export default Body;
