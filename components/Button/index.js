import styles from '@components/Button/Button.module.scss';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
  init: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.175, 0.85, 0.42, 0.96] },
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.175, 0.85, 0.42, 0.96] },
  },
};

const Button = ({ href, color, children }) => {
  const router = useRouter();
  return (
    <motion.div
      className={styles.container}
      data-color={color}
      onClick={() => router.push(href)}
      variants={variants}
    >
      <span>{children}</span>
    </motion.div>
  );
};

export default Button;
