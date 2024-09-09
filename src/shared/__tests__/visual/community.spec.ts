import { test } from '@playwright/test';
import { takeScreenshot } from './utils';

test('Community page', async ({ page }) => {
  await page.goto('/community');

  await takeScreenshot(page, 'Community page');
});
