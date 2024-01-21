import './Footer.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <footer className="footer">© {currentYear} The Rolling Scopes</footer>;
};
