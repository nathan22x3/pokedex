import Image from '@components/Image';
import { body as animation } from '@components/Pokemon/animation';
import styles from '@components/Pokemon/Pokemon.module.scss';
import { motion } from 'framer-motion';
import React from 'react';
import {
  capitalize,
  genderRateFormatter,
  heightFormatter,
  speciesFormatter,
  weightFormatter,
} from 'utils';

const Body = ({ data }) => {
  const { name, sprites, height, weight, abilities, breeding } = data;
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
      <motion.section
        variants={animation.info}
        initial='init'
        animate='show'
        transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.8 }}
      >
        <div className={styles.title}>
          <span>Species</span>
          <span>Height</span>
          <span>Weight</span>
          <span>Abilities</span>
        </div>
        <div className={styles.value}>
          <span>{capitalize(speciesFormatter(genera[7].genus))}</span>
          <span>{heightFormatter(height)}</span>
          <span>{weightFormatter(weight)}</span>
          <span>
            {abilities
              ?.map(({ ability }) => capitalize(ability.name))
              .join(', ')}
          </span>
        </div>
      </motion.section>
      <motion.h3
        variants={animation.info}
        initial='init'
        animate='show'
        transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.9 }}
      >
        Breeding
      </motion.h3>
      <motion.section
        variants={animation.info}
        initial='init'
        animate='show'
        transition={{ duration: 0.75, ease: 'easeInOut', delay: 1 }}
      >
        <div className={styles.title}>
          <span>Gender</span>
          <span>Egg Groups</span>
          <span>Egg Cycle</span>
        </div>
        <div className={styles.value}>
          <div className={styles.gender}>
            <div>
              <Image src={'/images/male.svg'} title='Male gender' width={18} />
              <span>{genderRateFormatter(gender_rate, 'male')}</span>
            </div>
            <div>
              <Image
                src={'/images/female.svg'}
                title='Female gender'
                width={18}
              />
              <span>{genderRateFormatter(gender_rate, 'female')}</span>
            </div>
          </div>
          <span>
            {egg_groups?.map(({ name }) => capitalize(name)).join(', ')}
          </span>
          <span>???</span>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default Body;
