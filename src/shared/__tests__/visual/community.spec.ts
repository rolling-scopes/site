import { test } from '@playwright/test';

import { takeScreenshot } from './utils';
import { ROUTES } from '@/core/const';

test('Community page', async ({ page }) => {
  await page.goto(ROUTES.COMMUNITY);

  await takeScreenshot(page, 'Community page');
});
