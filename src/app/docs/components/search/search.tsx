'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link.js';
import mockedResults from '../../mocked_search.json';

import styles from './search.module.scss';

const cx = classNames.bind(styles);

declare global {
  interface Window {
    pagefind: {
      options?: (opt: {
        baseUrl?: string;
        bundlePath?: string;
        excerptLength?: number;
        highlightParam?: 'highlight';
      }) => Promise<void>;
      search: (query: string) => Promise<{
        results: unknown[];
      }>;
    };
  }
}

const isRunningInDev = process.env.NODE_ENV === 'development';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<unknown[]>([]);

  useEffect(() => {
    async function loadPagefind() {
      if (!isRunningInDev) {
        window.pagefind = await import(
          // pagefind.js generated after build
          // @ts-ignore
          // eslint-disable-next-line import/no-unresolved, import/extensions
          /* webpackIgnore: true */ '/_next/static/pagefind/pagefind.js'
        );

        await window.pagefind.options!({ baseUrl: '/' });
      } else {
        window.pagefind = { search: async () => ({ results: mockedResults }) };
      }
    }

    loadPagefind();
  }, []);

  async function handleSearch() {
    if (window.pagefind) {
      const search = await window.pagefind.search(query);

      setResults(search.results);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onInput={handleSearch}
      />
      <div id="results">
        {results.map((result, index) => (
          // @ts-ignore
          <Result key={index} result={result} />
        ))}
      </div>
    </div>
  );
}
// @ts-ignore
function Result({ result }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (isRunningInDev) {
        setData(result);
      } else {
        const data = await result.data();

        setData(data);
      }
    }

    fetchData();
  }, [result]);

  if (!data) {
    return null;
  }

  return (
    <div className={cx('results')}>
      {/* @ts-ignore */}
      <Link href={data.url}>
        {/* @ts-ignore */}
        <h3>{data.meta.title}</h3>
        {/* @ts-ignore */}
        <p>{data.excerpt}</p>
      </Link>

      {/* @ts-ignore */}
      {data.sub_results && data.sub_results.length > 0 && (
        <div className={cx('subresults')}>
          {/* @ts-ignore */}
          {data.sub_results.map((subresult, index) => (
            <div key={index} className={cx('subresult')}>
              <Link href={subresult.url}>
                <h4>{subresult.title}</h4>
                <p>{subresult.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
