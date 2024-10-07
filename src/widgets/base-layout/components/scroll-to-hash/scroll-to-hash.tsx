import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollToHashElement = () => {
  // const location = useLocation();
  // const { key } = useLocation();

  const pathname = usePathname();

  useEffect(() => {
    const scrollToElement = (hash: string) => {
      const element = document.getElementById(hash.replace('#', ''));

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    const hash = pathname.split('#')[1];

    if (hash) {
      const id = setTimeout(() => scrollToElement(`#${hash}`), 0);

      return () => {
        clearTimeout(id);
      };
    }
  }, [pathname]);

  return null;
};
