/* eslint-disable import/no-namespace */

import { loadEnvConfig } from '@next/env';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

expect.extend(matchers);

const projectDir = process.cwd();

loadEnvConfig(projectDir);

afterEach(() => {
  cleanup();
});
