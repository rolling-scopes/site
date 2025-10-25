import { ANCHORS, ROUTES } from '@/shared/constants';

export const schoolMenuStaticLinks = {
  'en-US': [
    {
      title: 'About RS School',
      detailsUrl: `/#${ANCHORS.ABOUT_SCHOOL}`,
      description: 'Free online education',
    },
    {
      title: 'Upcoming courses',
      detailsUrl: `/#${ANCHORS.UPCOMING_COURSES}`,
      description: 'Schedule your study',
    },
    {
      title: 'Support Us',
      detailsUrl: `/#${ANCHORS.DONATE}`,
      description: 'Every donation, big or small, helps!',
    },
    {
      title: 'Mentors Wanted',
      detailsUrl: `/#${ANCHORS.MENTORS_WANTED}`,
      description: 'Help others to become professionals',
    },
  ],
  'ru': [
    {
      title: 'Про RS School',
      detailsUrl: `/#${ANCHORS.ABOUT_SCHOOL}`,
      description: 'Бесплатное онлайн образование',
    },
    {
      title: 'Ближайшие курсы',
      detailsUrl: `/#${ANCHORS.UPCOMING_COURSES}`,
      description: 'Запланируйте обучение',
    },
    {
      title: 'Поддержать нас',
      detailsUrl: `/#${ANCHORS.DONATE}`,
      description: 'Каждое пожертвование помогает!',
    },
    {
      title: 'Ищем менторов',
      detailsUrl: `/#${ANCHORS.MENTORS_WANTED}`,
      description: 'Помогите другим стать профессионалами',
    },
  ],
};

export const communityMenuStaticLinks = {
  'en-US': [
    {
      title: 'About Community',
      detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.ABOUT_COMMUNITY}`,
      description: 'Who we are',
    },
    {
      title: 'Events',
      detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.EVENTS}`,
      description: 'Meet us at events',
    },
    {
      title: 'Merch',
      detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.MERCH}`,
      description: 'Sloths for your daily life',
    },
    {
      title: 'Contribute',
      detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.CONTRIBUTE}`,
      description: 'Assist us and improve yourself',
    },
  ],
  'ru': [
    {
      title: 'О сообществе',
      detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.ABOUT_COMMUNITY}`,
      description: 'Кто мы такие',
    },
    {
      title: 'События',
      detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.EVENTS}`,
      description: 'Встречайтесь с нами на мероприятиях',
    },
    {
      title: 'Мерч',
      detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.MERCH}`,
      description: 'Ленивцы на каждый день',
    },
    {
      title: 'Помочь',
      detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.CONTRIBUTE}`,
      description: 'Помогайте нам и развивайтесь сами',
    },
  ],
};
