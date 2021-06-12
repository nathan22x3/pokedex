import styles from '@components/Pokemon/Pokemon.module.scss';
import { capitalize } from 'utils';
import { motion } from 'framer-motion';

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <div
      className={`${styles.tabButton} ${
        isActive ? styles.tabButtonActive : ''
      }`}
      {...{ onClick }}
    >
      <span>{capitalize(label)}</span>
      {isActive && (
        <motion.div
          layoutId={'indicator'}
          className={styles.tabIndicator}
          initial={false}
          animate={{ backgroundColor: '#9da6e7' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      )}
    </div>
  );
};

export default TabButton;
