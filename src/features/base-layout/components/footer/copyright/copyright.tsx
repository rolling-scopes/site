import './copyright.scss';

export const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return <div className="copyright">© {currentYear} The Rolling Scopes</div>;
};
