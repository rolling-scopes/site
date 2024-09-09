import { test } from '@playwright/test';
import { takeScreenshot } from './utils';

test('Main page', async ({ page }) => {
  await page.goto('/');

  await takeScreenshot(page, 'Main page');
});
