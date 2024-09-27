import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';

const { extend } = dayjs;

extend(isBetween);
extend(customParseFormat);

export const dayJS = dayjs;
