import NextImage from 'next/image';
import styles from '@components/Image/Image.module.scss';

const Image = ({ className, src, title, width, height }) => {
  return (
    <div
      className={`${styles.container} ${className || ''}`}
      style={{ width: width || 'auto', height: width || height || 'auto' }}
    >
      <NextImage
        className={styles.image}
        {...{ src }}
        alt={title}
        layout='fill'
      />
    </div>
  );
};

export default Image;
