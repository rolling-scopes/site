import { ChromaticConfig } from '@chromatic-com/playwright';
import { defineConfig, devices } from 'playwright/test';

export default defineConfig<ChromaticConfig>({
  testDir: 'src/shared/__tests__/visualTesting',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? 'dot'
    : [['html', { outputFolder: 'src/shared/__tests__/visualTesting/report' }]],
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'off',
  },
  outputDir: 'src/shared/__tests__/visualTesting/results',
  projects: [
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
