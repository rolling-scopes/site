import { LINKS } from '@/app/const';

export const mentorsRegisterData = {
  en: {
    header: 'Registration as a mentor',
    steps: [
      'Go to the mentor registration page',
      'Choose the course in which you will supervise students',
      'Answer questions about the number of students and their location',
      'Before starting the course, check your email and confirm your registration',
    ],
    button: {
      text: 'Registration',
      link: LINKS.BECOME_MENTOR,
      external: true,
    },
    note: 'You need a valid Github account to complete registration and access the RS-App application',
  },
  ru: {
    header: 'Регистрация ментором',
    steps: [
      'Перейти на страницу регистрации менторов',
      'Выбрать курс на котором вы будете курировать студентов',
      'Ответить на вопросы о количестве студентов и их локации',
      'Перед началом курса проверить почту и подтвердить регистрацию',
      'Просматривать Дискорд сервер и Телеграмм канал ',
    ],
    button: {
      text: 'Регистрация',
      link: LINKS.BECOME_MENTOR,
      external: true,
    },
    note: 'Для прохождения регистрации и доступа в приложение RS-App вам необходим действующий Github аккаунт',
  },
};
