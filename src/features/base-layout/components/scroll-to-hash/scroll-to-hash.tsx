import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHashElement = () => {
  // const location = useLocation();
  const { key } = useLocation();

  useEffect(() => {
    const scrollToElement = (hash: string) => {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    let id = setTimeout(() => scrollToElement(location.hash));

    return () => {
      clearInterval(id);
    };
  }, [key]);

  return null;
};
