import { expect, test } from '@playwright/test';

test('Navbar section screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('navigation')).toHaveScreenshot('navbar.png', { timeout: 10000 });
});
