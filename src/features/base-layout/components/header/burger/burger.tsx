import classNames from 'classnames/bind';

import styles from './burger.module.scss';

const cx = classNames.bind(styles);

interface BurgerProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const BurgerMenu = ({ isMenuOpen, toggleMenu }: BurgerProps) => {
  return (
    <div
      className={cx('burger', isMenuOpen ? 'open' : '')}
      onClick={toggleMenu}
      data-testid="burger">
      <div className={cx('top')} />
      <div className={cx('mid')} />
      <div className={cx('bottom')} />
    </div>
  );
};
