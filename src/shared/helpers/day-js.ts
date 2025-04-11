import dayjs, { extend } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';

extend(isBetween);
extend(customParseFormat);

export const dayJS = dayjs;
