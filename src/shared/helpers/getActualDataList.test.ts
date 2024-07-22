import { describe, expect, it } from 'vitest';
import { getActualDataList } from './getActualDataList';
import { Course } from '@/app/types';
import { isCourse } from '@/entities/courses/helpers/is-course';
import { EventCardProps } from '@/entities/events';
import { dayJS } from '@/shared/helpers/dayJS';

const staleAfterDays = 14;

const dayInFuture = dayJS().add(2, 'month').toISOString();
const nonStaleDayInPast = dayJS().subtract(1, 'day').toISOString();
const staleDayInPast = dayJS().subtract(staleAfterDays + 100, 'day').toISOString();

const coursesMock: Course[] = [
  {
    id: '1',
    title: 'title',
    altTitle: 'altTitle',
    iconSrc: 'icon',
    iconSmall: 'iconSmall',
    secondaryIcon: 'secondaryIcon',
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
    iconSrc: 'icon',
    iconSmall: 'iconSmall',
    secondaryIcon: 'secondaryIcon',
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
    iconSrc: 'icon',
    iconSmall: 'iconSmall',
    secondaryIcon: 'secondaryIcon',
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
] as unknown as EventCardProps[];

describe('getActualDataList', () => {
  it('can handle courses and filters stale by default', () => {
    const data = getActualDataList({
      dataList: coursesMock,
      actualDelayInDays: staleAfterDays,
    }).filter(isCourse);

    const noTBDinCourses = !data.some((course) => course.startDate === 'TBD');

    expect(noTBDinCourses).toBeTruthy();
  });

  it('can handle events and filters stale by default', () => {
    const data = getActualDataList({
      dataList: eventsMock,
      actualDelayInDays: staleAfterDays,
    });

    const noTBDinEvents = !data.some((event) => 'date' in event && event.date === 'TBD');

    expect(noTBDinEvents).toBeTruthy();
  });

  it('sorts by date ascending and puts TBD in end', () => {
    const data = getActualDataList({
      dataList: coursesMock,
      actualDelayInDays: staleAfterDays,
      filtered: false,
    }).filter(isCourse);

    expect(data[0].startDate).toBe(nonStaleDayInPast);
    expect(data[1].startDate).toBe(dayInFuture);
    expect(data[2].startDate).toBe('TBD');
  });
});
