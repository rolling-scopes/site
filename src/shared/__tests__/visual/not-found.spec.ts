import { test } from '@playwright/test';

import { takeScreenshot } from './utils';
import { ROUTES } from '@/shared/constants';

test('Not-found page', async ({ page }) => {
  await page.goto(ROUTES.NOT_FOUND);

  await takeScreenshot(page, 'Not-found page');
});
