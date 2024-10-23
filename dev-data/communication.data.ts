import { DISCORD_LINKS } from './courseTitles.data.ts';

export const RS_DOCS_COMMUNICATION_LINK = 'https://docs.rs.school/#/rs-school-chats';
export const RS_DOCS_TELEGRAM_CHATS_LINK = 'https://docs.rs.school/#/rs-school-chats?id=telegram';

export type CourseNamesChannels = keyof typeof DISCORD_LINKS;
