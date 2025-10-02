'use client';

import React, { RefObject, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link.js';
import { createPortal } from 'react-dom';

import MOCKED_SEARCH from '../../mocked-search';
import { Language } from '@/shared/types';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './search.module.scss';

const cx = classNames.bind(styles);

const isRunningInDev = process.env.NODE_ENV === 'development';

const translations = {
  en: {
    search: {
      placeholder: 'Search docs...',
      noResults: 'No results found for "{{query}}". Please try a different search.',
    },
  },
  ru: {
    search: {
      placeholder: 'Поиск по документации...',
      noResults: 'Результатов для "{{query}}" не найдено. Пожалуйста, попробуйте другой запрос.',
    },
  },
};

type SearchProps = {
  lang: Language;
  resultsRef: RefObject<null> | RefObject<HTMLDivElement>;
};

export default function Search({ lang, resultsRef }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PagefindSearchResult[]>([]);

  useEffect(() => {
    // see: https://www.petemillspaugh.com/nextjs-search-with-pagefind#dynamically-import-search-bundle
    async function loadPagefind() {
      if (!isRunningInDev) {
        window.pagefind = await import(
          // pagefind.js generated after build
          /* webpackIgnore: true */ `/_next/static/pagefind/${lang}/pagefind.js`,
        );

        await window.pagefind.options!({ baseUrl: `/docs/${lang}` });
      } else {
        window.pagefind = { search: async () => ({ results: MOCKED_SEARCH }) as unknown as PagefindSearchResults };
      }
    }

    loadPagefind();
  }, [lang]);

  useEffect(() => {
    async function handleSearch() {
      if (window.pagefind) {
        const search = await window.pagefind.search(query);

        setResults(search.results);
      }
    }

    handleSearch();
  }, [query]);

  return (
    <div className={cx('search')}>
      <input
        className={cx('search-input')}
        type="text"
        placeholder={translations[lang].search.placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={cx('results')}>
        {query
          && createPortal(
            <div className={cx('results')}>
              {results.length > 0
                ? (
                    results.map((result, index) => <Result key={index} result={result} />)
                  )
                : (
                    <div className={cx('no-results')}>
                      {translations[lang].search.noResults.replace('{{query}}', query)}
                    </div>
                  )}
            </div>,
            resultsRef.current!,
          )}
      </div>
    </div>
  );
}

function Result({ result }: { result: PagefindSearchResult }) {
  const [data, setData] = useState<PagefindSearchFragment>();

  useEffect(() => {
    async function fetchData() {
      const data = await result.data();

      setData(data);
    }

    fetchData();
  }, [result]);

  const removeHtmlExtension = (url: string): string => {
    const urlObj = new URL(url, window.location.origin);
    const hash = urlObj.hash;
    const pathname = urlObj.pathname;
    const cleanedPathname = pathname.endsWith('.html') ? pathname.slice(0, -5) : pathname;

    return `${cleanedPathname}${hash}`;
  };

  if (!data) {
    return null;
  }

  return (
    <div>
      <Link href={removeHtmlExtension(data.url)}>
        <Subtitle size="extra-small" weight="bold">
          {data.meta.title}
        </Subtitle>
        <p dangerouslySetInnerHTML={{ __html: data.excerpt }} />
      </Link>

      {data.sub_results && data.sub_results.length > 0 && (
        <div className={cx('subresults')}>
          {data.sub_results.map((subresult, index) => (
            <div key={index} className={cx('subresult')}>
              <Link href={removeHtmlExtension(subresult.url)}>
                <h4>{subresult.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: subresult.excerpt }} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
