import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

export const dayJS = dayjs;
