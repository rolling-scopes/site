'use client';

import React, { useState } from 'react';
import Link from 'next/link.js';

export default function Search() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    async function loadPagefind() {
      // @ts-ignore
      if (typeof window.pagefind === 'undefined') {
        try {
          // @ts-ignore
          // window.pagefind = await import(
          //   // @ts-expect-error pagefind.js generated after build
          //   // eslint-disable-next-line import/no-unresolved
          //   /* webpackIgnore: true */ '/_next/static/pagefind/pagefind.js'
          // );
          // @ts-expect-error
          await window.pagefind.options({
            baseUrl: '/',
            // ... more search options
          });
        } catch (e) {
          // @ts-ignore
          window.pagefind = {
            search: () => ({
              results: [
                {
                  id: 'dummy-id',
                  data: async () => ({
                    url: '/dummy-url',
                    meta: { title: 'dummy title' },
                    excerpt: 'dummy excerpt',
                  }),
                },
              ],
            }),
          };
        }
      }
    }
    loadPagefind();
  }, []);

  async function handleSearch() {
    // @ts-ignore
    if (window.pagefind) {
      // @ts-ignore
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
        {results.map((result) => (
          // @ts-ignore
          <Result key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}
// @ts-ignore
function Result({ result }) {
  const [data, setData] = useState(null);

  React.useEffect(() => {
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
    // @ts-ignore
    <Link href={data.url}>
      {/* @ts-ignore */}
      <h3>{data.meta.title}</h3>
      {/* @ts-ignore */}
      <p>{data.excerpt}</p>
    </Link>
  );
}
