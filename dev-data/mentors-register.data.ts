import { LINKS } from '@/core/const';

export const mentorsRegisterData = {
  en: {
    header: 'Registration as a mentor',
    stepsAfter: [
      'An email with instructions will be sent to you before mentoring begins',
      'Confirm your participation in the mentoring program by clicking on the link in the email',
      'Follow the links from the email to join the selected course community on Telegram and Discord',
    ],
    button: {
      text: 'Registration',
      link: LINKS.BECOME_MENTOR,
      external: true,
    },
    noteBefore: 'You need a Github account to complete registration and access the RS-App application',
    noteAfter: 'After completing the registration',
  },
  ru: {
    header: 'Регистрация ментором',
    stepsAfter: [
      'Перед началом менторинга вам будет направлено письмо с инструкциями на электронную почту',
      'Подтвердите участие в программе менторинга перейдя по ссылке в письме',
      'Подключитесь по ссылкам из письма к сообществу выбранного курса в Телеграмм и Дискорд',
    ],
    button: {
      text: 'Регистрация',
      link: LINKS.BECOME_MENTOR,
      external: true,
    },
    noteBefore: 'Для прохождения регистрации и доступа в приложение RS-App вам необходим Github аккаунт',
    noteAfter: 'После выполнения регистрации',
  },
};
