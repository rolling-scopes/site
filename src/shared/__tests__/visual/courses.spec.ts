import percyScreenshot from '@percy/playwright';
import { test } from '@playwright/test';

test('Courses page', async ({ page }) => {
  await page.goto('/courses');
  await page.waitForLoadState('networkidle');
  await page.waitForLoadState('domcontentloaded');

  await percyScreenshot(page, 'Courses page');
});
