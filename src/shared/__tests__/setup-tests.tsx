/* eslint-disable import/no-namespace */

import { loadEnvConfig } from '@next/env';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { StaticImageData } from 'next/image';
import { afterEach, expect } from 'vitest';

expect.extend(matchers);

const projectDir = process.cwd();

loadEnvConfig(projectDir);

afterEach(() => {
  cleanup();
});

vi.mock('next/image', () => ({
  default: (props: {
    src: StaticImageData;
    alt: string;
  }) => (
    <img
      {...props}
      src={props.src.src}
      alt={props.alt}
      height={props.src.height}
      width={props.src.width}
    />
  ),
}));
