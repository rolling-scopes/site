import { test } from '@playwright/test';

import { takeScreenshot } from './utils';
import { ROUTES } from '@/shared/constants';

test('Courses main page', async ({ page }) => {
  await page.goto(ROUTES.COURSES);

  await takeScreenshot(page, 'Courses main page');
});

test('Courses javascript-preschool-ru page', async ({ page }) => {
  await page.goto(`${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`);

  await takeScreenshot(page, 'Courses javascript-preschool-ru page');
});

test('Courses javascript-en page', async ({ page }) => {
  await page.goto(`${ROUTES.COURSES}/${ROUTES.JS}`);

  await takeScreenshot(page, 'Courses javascript-en page');
});

test('Courses javascript-ru page', async ({ page }) => {
  await page.goto(`${ROUTES.COURSES}/${ROUTES.JS_RU}`);

  await takeScreenshot(page, 'Courses javascript-ru page');
});

test('Courses react page', async ({ page }) => {
  await page.goto(`${ROUTES.COURSES}/${ROUTES.REACT}`);

  await takeScreenshot(page, 'Courses react page');
});

test('Courses angular page', async ({ page }) => {
  await page.goto(`${ROUTES.COURSES}/${ROUTES.ANGULAR}`);

  await takeScreenshot(page, 'Courses angular page');
});

test('Courses aws-fundamentals page', async ({ page }) => {
  await page.goto(`${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`);

  await takeScreenshot(page, 'Courses aws-fundamentals page');
});

test('Courses aws-cloud-developer page', async ({ page }) => {
  await page.goto(`${ROUTES.COURSES}/${ROUTES.AWS_DEVELOPER}`);

  await takeScreenshot(page, 'Courses aws-cloud-developer page');
});

test('Courses aws-devops page', async ({ page }) => {
  await page.goto(`${ROUTES.COURSES}/${ROUTES.AWS_DEVOPS}`);

  await takeScreenshot(page, 'Courses aws-devops page');
});
