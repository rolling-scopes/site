import percyScreenshot from '@percy/playwright';
import { test } from '@playwright/test';

test('Community page', async ({ page }) => {
  await page.goto('/community');
  await page.waitForLoadState('networkidle');
  await page.waitForLoadState('domcontentloaded');

  await percyScreenshot(page, 'Community page');
});
