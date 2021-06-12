import Image from '@components/Image';
import { header as animation } from '@components/Pokemon/animation';
import styles from '@components/Pokemon/Pokemon.module.scss';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ArrowLeft, Heart } from 'phosphor-react';
import { idFormatter } from 'utils';

const Header = ({ data }) => {
  const { id, name, types } = data;
  const router = useRouter();

  return (
    <>
      <nav className={styles.headerNav}>
        <span className={`button`} onClick={() => router.back()}>
          <ArrowLeft size={30} weight='bold' />
        </span>
        <span className={`button`}>
          <Heart size={30} weight='bold' />
        </span>
      </nav>
      <motion.header
        className={styles.header}
        variants={animation.container}
        initial='init'
        animate='show'
      >
        <motion.span
          className={styles.id}
          variants={animation.id}
          initial='init'
          animate='show'
        >
          {idFormatter(id)}
        </motion.span>
        <motion.h1
          className={styles.name}
          variants={animation.name}
          initial='init'
          animate='show'
        >
          {name}
        </motion.h1>
        <motion.div
          className={styles.types}
          variants={animation.types}
          initial='init'
          animate='show'
        >
          {types?.map(({ slot, type }) => (
            <motion.span key={slot} variants={animation.type}>
              {type.name}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className={styles.pokeball}
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        >
          <Image src={'/images/pokeball.svg'} title={'pokeball'} width={220} />
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
