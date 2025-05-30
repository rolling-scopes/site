import { LINKS } from '@/shared/constants';

export const mentorsRegisterData = {
  en: {
    header: 'Register as a Mentor',
    button: {
      text: 'Registration',
      link: LINKS.BECOME_MENTOR,
      external: true,
    },
    noteBefore: 'You need a Github account to complete registration and access the RS-App application',
  },
  ru: {
    header: 'Регистрация ментором',
    button: {
      text: 'Регистрация',
      link: LINKS.BECOME_MENTOR,
      external: true,
    },
    noteBefore: 'Для прохождения регистрации и доступа в приложение RS-App вам необходим Github аккаунт',
  },
};
