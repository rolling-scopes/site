import { test } from '@playwright/test';
import { takeScreenshot } from './utils';

test('Courses main page', async ({ page }) => {
  await page.goto('/courses');

  await takeScreenshot(page, 'Courses main page');
});

test('Courses javascript-preschool-ru page', async ({ page }) => {
  await page.goto('/courses/javascript-preschool-ru');

  await takeScreenshot(page, 'Courses javascript-preschool-ru page');
});

test('Courses javascript-en page', async ({ page }) => {
  await page.goto('/courses/javascript');

  await takeScreenshot(page, 'Courses javascript-en page');
});

test('Courses javascript-ru page', async ({ page }) => {
  await page.goto('/courses/javascript-ru');

  await takeScreenshot(page, 'Courses javascript-ru page');
});

test('Courses react page', async ({ page }) => {
  await page.goto('/courses/reactjs');

  await takeScreenshot(page, 'Courses react page');
});

test('Courses angular page', async ({ page }) => {
  await page.goto('/courses/angular');

  await takeScreenshot(page, 'Courses angular page');
});

test('Courses aws-fundamentals page', async ({ page }) => {
  await page.goto('/courses/aws-fundamentals');

  await takeScreenshot(page, 'Courses aws-fundamentals page');
});

test('Courses aws-cloud-developer page', async ({ page }) => {
  await page.goto('/courses/aws-cloud-developer');

  await takeScreenshot(page, 'Courses aws-cloud-developer page');
});

test('Courses aws-devops page', async ({ page }) => {
  await page.goto('/courses/aws-devops');

  await takeScreenshot(page, 'Courses aws-devops page');
});
