import { expect, test } from '@playwright/test';

test('Footer section screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.footer.container')).toHaveScreenshot('footer.png', {
    timeout: 10000,
  });
});
