'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link.js';
import MOCKED_SEARCH from '../../mocked_search';

import styles from './search.module.scss';

const cx = classNames.bind(styles);

const isRunningInDev = process.env.NODE_ENV === 'development';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PagefindSearchResult[]>([]);

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
        window.pagefind = {
          search: async () =>
            ({ results: MOCKED_SEARCH } as unknown as PagefindSearchResults),
        };
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
        className={cx('search-input')}
        type="text"
        placeholder="Search docs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onInput={handleSearch}
      />
      <div id="results">
        {results.map((result, index) => (
          <Result key={index} result={result} />
        ))}
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

  if (!data) {
    return null;
  }

  return (
    <div className={cx('results')}>
      <Link href={data.url}>
        <h3>{data.meta.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: data.excerpt }} />
      </Link>

      {data.sub_results && data.sub_results.length > 0 && (
        <div className={cx('subresults')}>
          {data.sub_results.map((subresult, index) => (
            <div key={index} className={cx('subresult')}>
              <Link href={subresult.url}>
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
