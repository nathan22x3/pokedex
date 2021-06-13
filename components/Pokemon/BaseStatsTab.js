import styles from '@components/Pokemon/Pokemon.module.scss';
import { body as variants } from '@variants/pokemon';
import { motion } from 'framer-motion';
import { progressColorGen } from 'utils';

const BaseStatsTab = ({ stats }) => {
  return (
    <>
      <motion.section
        className={styles.tabContent}
        variants={variants.content}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
      >
        <div className={styles.title}>
          <span>HP</span>
          <span>Attack</span>
          <span>Defense</span>
          <span>Sp. Atk</span>
          <span>Sp. Def</span>
          <span>Speed</span>
        </div>
        <div className={styles.value}>
          {stats.map((item) => (
            <div key={item.stat.name} className={styles.progress}>
              <span>{item.base_stat}</span>
              <div className={styles.progressBar}>
                <motion.span
                  initial={{ flex: 0, backgroundColor: '#ff5846' }}
                  animate={{
                    flex: item.base_stat / 200,
                    backgroundColor: progressColorGen(item.base_stat),
                  }}
                  transition={{ duration: 2, ease: 'anticipate', delay: 0.4 }}
                ></motion.span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.h3
        variants={variants.content}
        transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.1 }}
      >
        Type defenses
      </motion.h3>
    </>
  );
};

export default BaseStatsTab;
