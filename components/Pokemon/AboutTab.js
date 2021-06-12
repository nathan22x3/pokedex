import Image from '@components/Image';
import { body as animation } from '@components/Pokemon/animation';
import styles from '@components/Pokemon/Pokemon.module.scss';
import { motion } from 'framer-motion';
import {
  capitalize,
  genderRateFormatter,
  heightFormatter,
  speciesFormatter,
  weightFormatter,
} from 'utils';

const AboutTab = ({
  height,
  weight,
  abilities,
  gender_rate,
  egg_groups,
  genera,
}) => {
  return (
    <>
      <motion.section
        className={styles.tabContent}
        variants={animation.content}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
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
        variants={animation.content}
        transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.1 }}
      >
        Breeding
      </motion.h3>
      <motion.section
        className={styles.tabContent}
        variants={animation.content}
        transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.2 }}
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
    </>
  );
};

export default AboutTab;
