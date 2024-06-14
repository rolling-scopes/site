import { useEffect, useRef } from 'react';

export const useTitle = (title: string) => {
  const documentDefined = typeof document !== 'undefined';
  const originalTitle = useRef(documentDefined ? document.title : 'RS Site');

  useEffect(() => {
    if (!documentDefined) {
      return;
    }

    if (document.title !== title) {
      document.title = title;
    }

    const titleElement = originalTitle.current;

    return () => {
      document.title = titleElement;
    };
  }, [documentDefined, title]);
};
