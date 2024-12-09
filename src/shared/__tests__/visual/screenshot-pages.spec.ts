import { expect, test } from '@playwright/test';
import { VIEWPORTS, takeScreenshot } from './utils';
import { ROUTES } from '@/core/const';

const pages = [
  {
    name: 'Not found page',
    path: ROUTES.NOT_FOUND,
  },
  {
    name: 'Main page',
    path: ROUTES.HOME,
  },
  {
    name: 'Community page',
    path: ROUTES.COMMUNITY,
  },
  {
    name: 'Courses main page',
    path: ROUTES.COURSES,
  },
  {
    name: 'Courses javascript-preschool-ru page',
    path: `${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`,
  },
  {
    name: 'Courses javascript-en page',
    path: `${ROUTES.COURSES}/${ROUTES.JS}`,
  },
  {
    name: 'Courses javascript-ru page',
    path: `${ROUTES.COURSES}/${ROUTES.JS_RU}`,
  },
  {
    name: 'Courses react page',
    path: `${ROUTES.COURSES}/${ROUTES.REACT}`,
  },
  {
    name: 'Courses angular page',
    path: `${ROUTES.COURSES}/${ROUTES.ANGULAR}`,
  },
  {
    name: 'Courses aws-fundamentals page',
    path: `${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`,
  },
  {
    name: 'Courses aws-cloud-developer page',
    path: `${ROUTES.COURSES}/${ROUTES.AWS_DEVELOPER}`,
  },
  {
    name: 'Courses aws-devops page',
    path: `${ROUTES.COURSES}/${ROUTES.AWS_DEVOPS}`,
  },
];

for (const { name, path } of pages) {
  test(`Screenshot of ${name} - Desktop`, async ({ page }) => {
    await page.goto(path);
    await takeScreenshot(page, name + '-desktop');
  });
}

for (const { name, path } of pages) {
  test(`Screenshot of ${name} - Mobile`, async ({ page }) => {
    await page.setViewportSize({
      width: VIEWPORTS['mobile-width'],
      height: VIEWPORTS['mobile-height'],
    });

    await page.goto(path);
    await takeScreenshot(page, name + '-mobile');
  });
}

test('Main page mobile', async ({ page }) => {
  await page.setViewportSize({
    width: VIEWPORTS['mobile-width'],
    height: VIEWPORTS['mobile-height'],
  });

  await page.goto(ROUTES.HOME);

  await page.getByTestId('burger').click();

  const mobileMenu = page.getByTestId('mobile-menu');

  expect(mobileMenu).toBeInViewport();

  await takeScreenshot(page, 'Main page mobile - menu open');

  await page.getByTestId('burger').click();
  await expect(mobileMenu).not.toBeInViewport();
});
