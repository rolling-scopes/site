/* eslint-disable import/no-namespace */

import { loadEnvConfig } from '@next/env';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { StaticImageData } from 'next/image';
import { afterEach, expect, vi } from 'vitest';
import { mockedCourses } from '@/shared/__tests__/constants';

expect.extend(matchers);

const projectDir = process.cwd();

loadEnvConfig(projectDir);

afterEach(() => {
  cleanup();
});

vi.mock('@/entities/course/api/course-api', () => ({ getCourses: vi.fn().mockImplementation(() => mockedCourses) }));

vi.mock('@/shared/hooks/use-course-by-title/utils/select-course', () => ({
  selectCourse: vi.fn().mockImplementation((courseName) => {
    return Promise.resolve(mockedCourses.find((course) => course.title === courseName));
  }),
}));

vi.mock('next/image', () => ({
  default: (props: { src: StaticImageData;
    alt: string; }) => (
    <img
      {...props}
      src={props.src.src}
      alt={props.alt}
      height={props.src.height}
      width={props.src.width}
    />
  ),
}));
