import percyScreenshot from '@percy/playwright';
import { Page } from '@playwright/test';

export async function takeScreenshot(page: Page, name: string) {
  await page.waitForLoadState('networkidle');
  await page.waitForLoadState('domcontentloaded');

  await percyScreenshot(page, name);
}
