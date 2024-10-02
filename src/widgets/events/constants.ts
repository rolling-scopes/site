import dayjs from 'dayjs';
import { RS_FOUNDATION_YEAR } from '@/shared/constants';
import { getActualData } from '@/shared/helpers/getActualData';
import { events } from 'data';

export const maxUpcomingEventsQuantity = 2;
export const actualEvents = getActualData({
  data: events,
  staleAfter: 3,
});

export const nearestEvents = actualEvents.slice(0, maxUpcomingEventsQuantity);

export const rsLifetime = dayjs().diff(RS_FOUNDATION_YEAR, 'year');
