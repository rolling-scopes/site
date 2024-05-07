import { expect, test } from '@playwright/test';

test('Capture or match screenshots', async ({ page }) => {
  // await page.goto('https://rs.school');
  await page.goto('http://localhost:4173');
  await expect(page).toHaveScreenshot('origin.png', { fullPage: true, timeout: 10000 });
});
