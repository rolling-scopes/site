/* eslint-disable import/no-named-as-default-member */
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export const dayJS = dayjs;
