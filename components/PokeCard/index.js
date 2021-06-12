import Image from '@components/Image';
import styles from '@components/PokeCard/PokeCard.module.scss';
import Link from 'next/link';
import { idFormatter } from 'utils';

const PokeCard = ({ id, name, types, image }) => {
  return (
    <Link href={`/pokedex/${name}`}>
      <a className={styles.container} data-color={types[0].type.name}>
        <span className={styles.id}>{idFormatter(id)}</span>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.types}>
          {types?.map(({ slot, type }) => (
            <span key={slot}>{type.name}</span>
          ))}
        </div>
        <Image className={styles.image} src={image} title={name} width={75} />
      </a>
    </Link>
  );
};

export default PokeCard;
