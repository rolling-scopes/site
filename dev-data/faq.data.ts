import { FaqData } from '@/widgets/faq';

export const preschoolFaqData: FaqData = [
  {
    question: 'Где можно задать вопрос?',
    answer: [
      {
        id: 0,
        text: 'Вопросы можно задать в Discord ',
        title: 'чате',
        link: 'https://discord.gg/2Ww3TCBvz4',
      },
    ],
  },
  {
    question: 'Где происходит общение?',
    answer: [
      {
        id: 1,
        text: 'В Discord ',
        title: 'чате',
        link: 'https://discord.gg/2Ww3TCBvz4',
      },
    ],
  },
  {
    question: 'Имеет ли значения город проживания? Можно ли пройти курс полностью онлайн?',
    answer: 'Город проживания значения не имеет. Все этапы обучения можно пройти онлайн.',
  },
  {
    question: 'Можно ли изучать учебные модули и делать проекты заранее?  ',
    answer:
      'Конечно! После прохождения всех модулей подготовительного этапа вы можете начать прохождение stage#1. ',
  },
  {
    question:
      'Нужна ли регистрация на основной курс если я зарегистрирован на подготовительный этап?',
    answer: [
      {
        id: 2,
        text: 'Да, нужна. Ссылка на регистрацию ',
        title: 'тут',
        link: 'https://rs.school/courses/javascript-ru',
      },
    ],
  },
  {
    question: 'Можно ли пропускать вебинары?',
    answer:
      'Да, можно. Записи вебинаров можно будет найти на нашем канале - YouTube. Видео удобнее смотреть на скорости 1.25 или выше.',
  },
  {
    question: 'Обязательно ли смотреть вебинары школы?',
    answer:
      'Нет. Ссылки на рекомендуемую для изучения теорию находится в модулях. После самостоятельного изучения материалов модуля вы можете посмотреть вебинар, чтобы закрепить информацию или задать вопросы тренеру.',
  },
  {
    question: 'Кто проверяет задания?',
    answer:
      'Практические задания проверяются в ходе кросс-чек. Алгоритмические задания, задачи из Codewars, а также задания "CV#1. Markdown & Git", "CV#2. HTML, CSS & Git Basics" проверяются автоматически. Ваши решения необходимо сабмитнуть в RS APP до дедлайна.',
  },
];

export const faqDataShortTrack: FaqData = [
  {
    question: 'Where can I ask a question?',
    answer: [
      {
        id: 0,
        text: 'Questions can be asked in ',
        title: 'Telegram chanel',
        link: 'https://t.me/epamJsShortTrack',
      },
    ],
  },
  {
    question: 'Is it possible to take the course completely online?',
    answer: 'All stages of training can be completed online.',
  },
  {
    question: 'Is there a list of interview questions? What should I prepare for?',
    answer: [
      {
        id: 0,
        text: 'You can prepare for the interview with this list of topics and questions ',
        title: 'topics and questions',
        link: 'https://github.com/rolling-scopes-school/epam-short-track/tree/main/screening',
      },
    ],
  },
  {
    question:
      'If I’m selected for the JS Short Track, can I also continue with the classic Stage #2 and take both courses at the same time?',
    answer:
      'No, you cannot take the JS Short Track alongside the classic Stage #2. You will need to choose one path.',
  },
  {
    question:
      'If I’m not accepted into the JS Short Track course after the interview, can I continue with the JS Stage #2 course?',
    answer:
      'Yes, if you are not selected for the JS Short Track, you can continue your studies in JS Stage #2. ',
  },
];
