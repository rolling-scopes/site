import { expect, test } from "@chromatic-com/playwright";

test('Main page full screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('footer');

  await expect(page).toHaveScreenshot('main.png', {
    fullPage: true,
    timeout: 10000,
    mask: [page.getByTestId('courses-list')],
  });
});
