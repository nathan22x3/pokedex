import { MagnifyingGlass } from 'phosphor-react';
import styles from '@components/Searchbar/Searchbar.module.scss';

const Searchbar = () => {
  return (
    <div className={styles.container}>
      <MagnifyingGlass size={18} weight='bold' />
      <input type='text' placeholder='Search Pokemon, Move, Ability, etc...' />
    </div>
  );
};

export default Searchbar;
