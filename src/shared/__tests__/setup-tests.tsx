/* eslint-disable import/no-namespace */

import { loadEnvConfig } from '@next/env';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { StaticImageData } from 'next/image';
import { Mock, afterEach, expect, vi } from 'vitest';

import { mockedCourses } from '@/shared/__tests__/constants';

expect.extend(matchers);

const projectDir = process.cwd();

loadEnvConfig(projectDir);

beforeAll(() => {
  // jsdom doesn't support HTMLDialogElement
  // https://github.com/jsdom/jsdom/issues/3294
  HTMLDialogElement.prototype.show = vi.fn();
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

beforeEach(() => {
  (HTMLDialogElement.prototype.show as Mock).mockClear();
  (HTMLDialogElement.prototype.showModal as Mock).mockClear();
  (HTMLDialogElement.prototype.close as Mock).mockClear();
});

afterEach(() => {
  cleanup();
});

vi.mock('@/entities/course/api/course-api', () => ({ getCourses: vi.fn().mockImplementation(() => mockedCourses) }));

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
