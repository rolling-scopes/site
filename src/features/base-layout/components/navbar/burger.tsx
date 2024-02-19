interface BurgerProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const BurgerMenu = ({ isMenuOpen, toggleMenu }: BurgerProps) => {
  return (
    <div className={`burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} data-testid="burger">
      <div className="top" />
      <div className="mid" />
      <div className="bottom" />
    </div>
  );
};
