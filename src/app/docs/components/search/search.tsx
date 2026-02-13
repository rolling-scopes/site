'use client';

import React, { RefObject, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { createPortal } from 'react-dom';

import MOCKED_SEARCH_EN from '../../mocked-search';
import MOCKED_SEARCH_RU from '../../mocked-search-ru';
import { Language } from '@/shared/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './search.module.scss';

const cx = classNames.bind(styles);

const isRunningInDev = process.env.NODE_ENV === 'development';

const translations = {
  en: {
    search: {
      placeholder: 'Search docs...',
      noResults: 'No results found for "{{query}}". Please try a different search.',
      error: 'Search is temporarily unavailable. Please try again later.',
    },
  },
  ru: {
    search: {
      placeholder: 'Поиск по документации...',
      noResults: 'Результатов для "{{query}}" не найдено. Пожалуйста, попробуйте другой запрос.',
      error: 'Поиск временно недоступен. Пожалуйста, повторите попытку позже.',
    },
  },
};

type SearchProps = {
  lang: Language;
  resultsRef: RefObject<HTMLDivElement | null>;
};

/**
 * Render a localized search input that loads Pagefind, performs debounced queries, and displays results.
 *
 * Loads Pagefind for the given language, runs searches as the user types (debounced), and renders either
 * results, a localized no-results message, or a localized error message. Search result content is mounted
 * into the provided results container via a React portal.
 *
 * @param lang - Language code used for localizing UI text and configuring Pagefind's base URL
 * @param resultsRef - Ref to the container element where search results will be rendered via portal
 * @returns The search UI element; the actual results are mounted into `resultsRef.current`
 */
export default function Search({ lang, resultsRef }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PagefindSearchResult[]>([]);
  const [isPagefindReady, setIsPagefindReady] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    let stale = false;

    async function loadPagefind() {
      setIsPagefindReady(false);
      setSearchError(null);
      try {
        if (!isRunningInDev) {
          window.pagefind = await import(
            /* webpackIgnore: true */ `/_next/static/pagefind/${lang}/pagefind.js`,
          );
          if (stale) {
            return;
          }

          if (window.pagefind?.options) {
            await window.pagefind.options({ baseUrl: '' });
          }
        } else {
          const MOCKED_SEARCH = lang === 'ru' ? MOCKED_SEARCH_RU : MOCKED_SEARCH_EN;

          window.pagefind = { search: async () => ({ results: MOCKED_SEARCH }) as unknown as PagefindSearchResults };
        }
        if (stale) {
          return;
        }
        setIsPagefindReady(true);
      } catch (error) {
        if (stale) {
          return;
        }
        console.error('Failed to load Pagefind:', error);
        setSearchError(translations[lang].search.error);
      }
    }

    loadPagefind();
    return () => {
      stale = true;
    };
  }, [lang]);

  useEffect(() => {
    setIsSearching(true);
    const handleSearch = async () => {
      if (isPagefindReady && window.pagefind && query) {
        try {
          const search = await window.pagefind.search(query);

          setResults(search.results);
          setSearchError(null);
          setIsSearching(false);
        } catch (error) {
          console.error('Pagefind search failed:', error);
          setSearchError(translations[lang].search.error);
          setIsSearching(false);
        }
      } else if (!query) {
        setResults([]);
        setSearchError(null);
        setIsSearching(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
      setIsSearching(false);
    };
  }, [query, isPagefindReady, lang]);

  const renderResults = () => {
    if (searchError) {
      return <div className={cx('error-message')}>{searchError}</div>;
    }

    if (results.length > 0) {
      return results.map((result) => <Result key={result.id} result={result} lang={lang} />);
    }

    if (query && !isSearching && results.length === 0) {
      return (
        <div className={cx('no-results')}>
          {translations[lang].search.noResults.replace('{{query}}', query)}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={cx('search')}>
      <input
        className={cx('search-input')}
        type="text"
        placeholder={translations[lang].search.placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {resultsRef.current && createPortal(<div className={cx('results')}>{renderResults()}</div>, resultsRef.current)}
    </div>
  );
}

/**
 * Renders a search result entry with title, excerpt, and optional subresults.
 *
 * Fetches fragment data from the provided Pagefind result and renders a link to the cleaned URL containing the fragment's title and excerpt. If the fragment includes sub-results, each subresult is rendered as a linked item with its title and excerpt. Returns nothing (null) while fragment data is loading or if data cannot be fetched.
 *
 * @param result - A Pagefind search result object that exposes a `data()` method resolving to the result fragment used for rendering.
 * @returns A React element displaying the result and any subresults, or `null` if fragment data is not available.
 */
function Result({ result, lang }: { result: PagefindSearchResult;
  lang: Language; }) {
  const [data, setData] = useState<PagefindSearchFragment | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resultData = await result.data();

        setData(resultData);
      } catch (error) {
        console.error(`Failed to fetch result data for ID ${result.id}:`, error);
        setData(null);
      }
    }

    fetchData();
  }, [result]);

  const removeHtmlExtension = (url: string): string => {
    try {
      const urlObj = new URL(url, window.location.origin);
      const { hash, pathname } = urlObj;
      let cleanedPathname = pathname.endsWith('.html') ? pathname.slice(0, -5) : pathname;

      if (lang === 'en') {
        if (cleanedPathname.startsWith('/en/')) {
          cleanedPathname = cleanedPathname.substring(3);
        }
      } else if (!cleanedPathname.startsWith(`/${lang}/`)) {
        cleanedPathname = `/${lang}${cleanedPathname}`;
      }

      const finalUrl = `${cleanedPathname}${hash}`;

      return finalUrl;
    } catch {
      return url;
    }
  };

  if (!data) {
    return null;
  }

  return (
    <div>
      <LinkCustom href={removeHtmlExtension(data.url)} className={cx('link')} preserveLang={false}>
        <Subtitle size="extra-small" weight="bold">{data.meta.title}</Subtitle>
        {/*
          Pagefind excerpts contain highlight <mark> tags.
          dangerouslySetInnerHTML is used to render this HTML.
          This assumes the indexed content is trusted and sanitized to prevent XSS.
        */}
        <p dangerouslySetInnerHTML={{ __html: data.excerpt }} />
      </LinkCustom>

      {data.sub_results && data.sub_results.length > 0 && (
        <div className={cx('subresults')}>
          {data.sub_results.map((subresult, index) => (
            <div key={`${subresult.url}-${index}`} className={cx('subresult')}>
              <Link href={removeHtmlExtension(subresult.url)}>
                <h4>{subresult.title}</h4>
                {/*
                  Pagefind excerpts contain highlight <mark> tags.
                  dangerouslySetInnerHTML is used to render this HTML.
                  This assumes the indexed content is trusted and sanitized to prevent XSS.
                */}
                <p dangerouslySetInnerHTML={{ __html: subresult.excerpt }} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
