import { LINKS } from '@/app/const';

export const mentorsRegisterData = {
  en: {
    header: 'Registration as a mentor',
    stepsBefore: [
      'Click the button below to proceed to the mentor registration page',
      'Choose the course in which you will supervise students',
      'Answer questions about the number of students and their location',
      'Complete the registration and await notification by email',
    ],
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
    stepsBefore: [
      'Перейти на страницу регистрации менторов',
      'Выбрать курс на котором вы будете курировать студентов',
      'Ответить на вопросы о количестве студентов и их локации',
      'Завершить регистрацию и ожидать уведомления на электронную почту',
    ],
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
