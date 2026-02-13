const MOCKED_SEARCH_RU: PagefindSearchResult[] = [
  {
    id: 'ru_604d408',
    score: 5.712738,
    data: async () => {
      return {
        url: '/docs/rs-school-certificate.html',
        content:
          'Сертификат RS School. По просьбе студентов мы не выдаем сертификаты массово и устанавливаем порог для каждого курса. Обычно проходной балл равен 55% от лучшего результата на курсе. Например, лучший студент набирает 1884 балла, 0.55 * 1884 ~ = 1000. Таким образом, проходной балл - 1000. Минимальные требования для получения сертификата. CoreJS Interview - 4+ Общий проходной балл – 1000.',
        word_count: 134,
        filters: {},
        meta: { title: 'Сертификат' },
        anchors: [
          {
            element: 'h2',
            id: 'rs-school-certificate',
            text: 'Сертификат RS School',
            location: 0,
          },
        ],
        weighted_locations: [],
        locations: [],
        raw_content: 'Сертификат RS School...',
        raw_url: '/docs/rs-school-certificate.html',
        excerpt:
          'Минимальные требования для получения <mark>сертификата.</mark> CoreJS Interview - 4+ Общий проходной балл – 1000.',
        sub_results: [],
      };
    },
    words: [2, 10, 61],
  },
];

export default MOCKED_SEARCH_RU;
