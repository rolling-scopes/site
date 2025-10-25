'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

import { Language } from '@/shared/types';

export const LocaleResolver = () => {
  const params = useParams();
  const lang = params.lang as Language ?? 'en';

  useEffect(() => {
    if (lang) {
      document.documentElement.setAttribute('lang', lang);
    }
  }, [lang]);

  return null;
};
