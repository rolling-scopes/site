import { expect, test } from '@playwright/test';

test('Courses page full screenshots (match or capture if not exist)', async ({ page }) => {
  await page.goto('/courses');
  await page.waitForSelector('footer');

  await expect(page).toHaveScreenshot('courses.png', {
    fullPage: true,
    timeout: 10000,
    mask: [page.getByTestId('courses-fancy')],
  });
});
