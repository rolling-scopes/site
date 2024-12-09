import { ArgosScreenshotOptions, argosScreenshot } from '@argos-ci/playwright';
import { Page } from '@playwright/test';

export async function takeScreenshot(page: Page, name: string, options?: ArgosScreenshotOptions) {
  await page.waitForLoadState('networkidle');
  await page.waitForLoadState('domcontentloaded');

  await argosScreenshot(page, name, options);
}
