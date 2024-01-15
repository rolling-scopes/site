import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', ''); // Remove the hash symbol
    if (hash !== '') {
      let element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          inline: 'nearest'
        });
      }
    }
  }, [location.hash, location.pathname]); // Add location.pathname as a dependency

  return null;
};
