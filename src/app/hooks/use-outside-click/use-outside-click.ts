import { useEffect, useRef } from 'react';

const isElementInsideIgnoredArea = (element: Element | null): boolean => {
  while (element && element !== document.body) {
    if (element.getAttribute('data-outside-click-ignore') !== null) {
      return true;
    }
    element = element.parentElement;
  }
  return false;
};

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;

      if (target instanceof Element && !isElementInsideIgnoredArea(target)) {
        if (!(ref.current && ref.current.contains(target))) {
          callback();
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};
