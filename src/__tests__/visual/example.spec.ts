import { expect, test } from '@playwright/test';

test('Capture or match screenshots', async ({ page }) => {
  // await page.goto('https://rs.school');
  await page.goto('http://localhost:4173');
  await expect(page).toHaveScreenshot('origin.png');
});

// test('Main page has title', async ({ page }) => {
//   await page.goto('http://localhost:4173/');
// await page.screenshot({
//   path: 'src/__tests__/visual/screens/shot.png',
//   fullPage: true,
// });

//   await expect(page).toHaveTitle('Courses · The Rolling Scopes School');
// });

// test('Comparing to the origin', async ({ page }) => {
//   await page.goto('https://rs.school');
//   await page.screenshot({ path: 'src/__tests__/visual/screens/shot.png', fullPage: true });

//   await expect(page).toHaveTitle('Courses · The Rolling Scopes School');
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
