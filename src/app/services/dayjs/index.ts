import dayjs, { extend } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

extend(isBetween);

export const dayJS = dayjs;
