import { test } from '@playwright/test';
import { takeScreenshot } from './utils';
import { ROUTES } from '@/core/const';

test('Main page', async ({ page }) => {
  await page.goto(ROUTES.HOME);

  await takeScreenshot(page, 'Main page');
});
