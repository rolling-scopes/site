import dayjs, { extend } from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';

extend(isBetween);
extend(customParseFormat);

export default dayjs;
