import { DISCORD_LINKS } from './courseTitles.data.ts';

export const RS_DOCS_COMMUNICATION_LINK = 'https://docs.rs.school/#/rs-school-chats';
export const RS_DOCS_EN_LINK = 'https://docs.rs.school/#/en/';
export const RS_DOCS_TELEGRAM_CHATS_LINK = 'https://docs.rs.school/#/rs-school-chats?id=telegram';
export const JS_EN_TELEGRAM_CHAT_LINK = 'https://t.me/RSS_EN';

export type CourseNamesChannels = keyof typeof DISCORD_LINKS;
