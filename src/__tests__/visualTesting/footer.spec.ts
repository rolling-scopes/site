import { expect, test } from '@playwright/test';

test('Footer section screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('footer');

  await expect(page.getByTestId('footer')).toHaveScreenshot('footer.png', {
    timeout: 10000,
    stylePath: 'src/__tests__/visualTesting/custom.css',
  });
});
