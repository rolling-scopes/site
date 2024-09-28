import dayjs from 'dayjs';
import { getActualData } from '@/shared/helpers/getActualData.ts';
import { events } from 'data';

export const displayedCardsQuantity = 2;
export const actualEvents = getActualData({
  data: events,
  staleAfter: 3,
});

export const nearestEvents = actualEvents.slice(0, displayedCardsQuantity);

export const rsLifetime = dayjs().diff('2013', 'year');
