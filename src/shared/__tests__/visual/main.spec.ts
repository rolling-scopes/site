import percyScreenshot from '@percy/playwright';
import { test } from '@playwright/test';

test('Main page', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForLoadState('domcontentloaded');

  await percyScreenshot(page, 'Main page');
});
