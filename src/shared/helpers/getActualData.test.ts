import { describe, expect, it } from 'vitest';
import { getActualData } from './getActualData';
import type { Course } from '@/entities/course';
import { Event } from '@/entities/event';
import { dayJS } from '@/shared/helpers/dayJS';
import { isCourse } from '@/shared/helpers/is-course';

const staleAfterDays = 14;

const dayInFuture = dayJS().add(2, 'month').toISOString();
const nonStaleDayInPast = dayJS().subtract(1, 'day').toISOString();
const staleDayInPast = dayJS()
  .subtract(staleAfterDays + 100, 'day')
  .toISOString();

const coursesMock: Course[] = [
  {
    id: '1',
    title: 'title',
    altTitle: 'altTitle',
    iconSrc: {
      src: 'icon',
      height: 100,
      width: 100,
    },
    iconSmall: {
      src: 'iconSmall',
      height: 100,
      width: 100,
    },
    secondaryIcon: {
      src: 'secondaryIcon',
      height: 100,
      width: 100,
    },
    startDate: staleDayInPast,
    language: ['ru'],
    mode: 'online',
    detailsUrl: `url`,
    enroll: 'enroll',
    backgroundStyle: {
      backgroundColor: 'color',
      accentColor: 'color',
    },
  },
  {
    id: '2',
    title: 'title',
    altTitle: 'altTitle',
    iconSrc: {
      src: 'icon',
      height: 100,
      width: 100,
    },
    iconSmall: {
      src: 'iconSmall',
      height: 100,
      width: 100,
    },
    secondaryIcon: {
      src: 'secondaryIcon',
      height: 100,
      width: 100,
    },
    startDate: dayInFuture,
    language: ['ru'],
    mode: 'online',
    detailsUrl: `url`,
    enroll: 'enroll',
    backgroundStyle: {
      backgroundColor: 'color',
      accentColor: 'color',
    },
  },
  {
    id: '3',
    title: 'title',
    altTitle: 'altTitle',
    iconSrc: {
      src: 'icon',
      height: 100,
      width: 100,
    },
    iconSmall: {
      src: 'iconSmall',
      height: 100,
      width: 100,
    },
    secondaryIcon: {
      src: 'secondaryIcon',
      height: 100,
      width: 100,
    },
    startDate: nonStaleDayInPast,
    language: ['ru'],
    mode: 'online',
    detailsUrl: `url`,
    enroll: 'enroll',
    backgroundStyle: {
      backgroundColor: 'color',
      accentColor: 'color',
    },
  },
];

const eventsMock = [
  { date: staleDayInPast },
  { date: dayInFuture },
  { date: nonStaleDayInPast },
] as unknown as Event[];

describe('getActualData', () => {
  it('can handle courses and filters stale by default', () => {
    const data = getActualData({
      data: coursesMock,
      staleAfter: staleAfterDays,
    }).filter(isCourse);

    const noTBDinCourses = !data.some((course) => course.startDate === 'TBD');

    expect(noTBDinCourses).toBeTruthy();
  });

  it('can handle events and filters stale by default', () => {
    const data = getActualData({
      data: eventsMock,
      staleAfter: staleAfterDays,
    });

    const noTBDinEvents = !data.some((event) => 'date' in event && event.date === 'TBD');

    expect(noTBDinEvents).toBeTruthy();
  });

  it('sorts by date ascending and puts TBD in end', () => {
    const data = getActualData({
      data: coursesMock,
      staleAfter: staleAfterDays,
      filterStale: false,
    }).filter(isCourse);

    expect(data[0].startDate).toBe(nonStaleDayInPast);
    expect(data[1].startDate).toBe(dayInFuture);
    expect(data[2].startDate).toBe('TBD');
  });
});
