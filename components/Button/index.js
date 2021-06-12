import Link from 'next/link';
import styles from '@components/Button/Button.module.scss';

const Button = ({ href, color, children }) => {
  return (
    <Link {...{ href }}>
      <a className={styles.container} data-color={color}>
        <span>{children}</span>
      </a>
    </Link>
  );
};

export default Button;
