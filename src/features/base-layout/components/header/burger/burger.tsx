import styles from './burger.module.scss';

interface BurgerProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const BurgerMenu = ({ isMenuOpen, toggleMenu }: BurgerProps) => {
  return (
    <div
      className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`}
      onClick={toggleMenu}
      data-testid="burger">
      <div className={styles.top} />
      <div className={styles.mid} />
      <div className={styles.bottom} />
    </div>
  );
};
