import { renderHook, waitFor } from '@testing-library/react';
import { MockedFunction, describe, expect, it, vi } from 'vitest';
import { useDataByName } from './use-data-by-name';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';
import { fetchDataByName } from '@/app/services/api';
import { DataMap } from '@/app/services/data/courses-data.types';

const courses: DataMap['courses'] = [
  {
    id: '1',
    title: 'AWS Fundamentals',
    iconSrc: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    startDate: 'Sept 18, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/aws-fundamentals/',
    enroll: 'https://wearecommunity.io/events/rs-aws-2023q3',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#7356BF' },
  },
];

const coursesPath: DataMap['coursesPath'] = [
  {
    id: 1,
    title: 'Pre-school',
    description:
      'For those brand new to coding, this is your starting point. Get acquainted with the basics and build a strong foundation.',
    logoIcon: MOCKED_IMAGE_PATH,
    links: [
      {
        linkTitle: 'Pre-school upturn',
        href: 'https://rs.school/js-stage0/',
        isActive: true,
      },
    ],
  },
];

const javascriptPath: DataMap['javascript'] = [
  {
    id: 1,
    title: 'Stage 1',
    description:
      'Everyone registered is automatically eligible for this stage. The first stage lasts 15 weeks. This stage includes practical assignments and tests. Evaluation is either automatic or in the form of cross-checking between students.',
    imageSrc: MOCKED_IMAGE_PATH,
    topics: ['Git', 'HTML', 'CSS', 'Javascript basics'],
  },
];

const angularPath: DataMap['angular'] = [
  {
    id: 1,
    title: 'Week #1',
    actions: [
      'Module "Angular Intro. TypeScript."',
      'Module "Angular. Components"',
      'Module "Angular. Directives & Pipes"',
    ],
  },
];

const awsDevPath: DataMap['awsDev'] = [
  {
    id: 1,
    title: 'Module 1. Cloud Introduction',
    actions: [
      'Fundamental theory about cloud computing',
      'Cloud service models, cloud deployment models, infrastructure-as-code',
      'Monolith vs microservices vs serverless',
      'AWS intro, registration, Cloud Watch, IAM Repository structure',
    ],
  },
];

vi.mock('@/app/services/api', () => ({
  fetchDataByName: vi.fn().mockImplementation(async (dataName: keyof DataMap) => {
    switch (dataName) {
      case 'courses':
        return courses;
      case 'coursesPath':
        return coursesPath;
      case 'javascript':
        return javascriptPath;
      case 'angular':
        return angularPath;
      case 'awsDev':
        return awsDevPath;
      default:
        return [];
    }
  }),
}));

describe('useDataByName', () => {
  it('should fetch courses data correctly and update the state', async () => {
    const { result } = renderHook(() => useDataByName('courses'));

    await waitFor(() => !result.current.loading);

    expect(result.current.data).toEqual(courses);
    expect(result.current.error).toBe(null);
  });

  it('should raise an error when fetch fails', async () => {
    (fetchDataByName as MockedFunction<typeof fetchDataByName>).mockReturnValueOnce(
      Promise.reject(new Error('Test fetch failed')),
    );

    const { result } = renderHook(() => useDataByName('courses'));

    await waitFor(() => !result.current.loading);

    expect(result.current.data).toEqual(null);
    expect(result.current.error?.message).toBe('Test fetch failed');
  });

  it('should fetch coursesPath data correctly', async () => {
    const { result } = renderHook(() => useDataByName('coursesPath'));

    await waitFor(() => !result.current.loading);

    expect(result.current.data).toEqual(coursesPath);
    expect(result.current.error).toBe(null);
  });

  it('should fetch javascriptPath data correctly', async () => {
    const { result } = renderHook(() => useDataByName('javascript'));

    await waitFor(() => !result.current.loading);

    expect(result.current.data).toEqual(javascriptPath);
    expect(result.current.error).toBe(null);
  });

  it('should fetch angularPath data correctly', async () => {
    const { result } = renderHook(() => useDataByName('angular'));

    await waitFor(() => !result.current.loading);

    expect(result.current.data).toEqual(angularPath);
    expect(result.current.error).toBe(null);
  });

  it('should fetch awsDevPath data correctly', async () => {
    const { result } = renderHook(() => useDataByName('awsDev'));

    await waitFor(() => !result.current.loading);

    expect(result.current.data).toEqual(awsDevPath);
    expect(result.current.error).toBe(null);
  });
});
