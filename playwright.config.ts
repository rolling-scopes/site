import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'app/shared/__tests__',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'dot' : [['html', { outputFolder: 'app/shared/__tests__/report' }]],
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'off',
  },
  outputDir: 'app/shared/__tests__/test-results',
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
