import Image from '@components/Image';
import styles from '@components/Pokemon/Pokemon.module.scss';
import { header as variants } from '@variants/pokemon';
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
      <motion.header className={styles.header} variants={variants.container}>
        <motion.span className={styles.id} variants={variants.id}>
          {idFormatter(id)}
        </motion.span>
        <motion.h1 className={styles.name} variants={variants.name}>
          {name}
        </motion.h1>
        <motion.div className={styles.types} variants={variants.types}>
          {types?.map(({ slot, type }) => (
            <motion.span key={slot} variants={variants.type}>
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
