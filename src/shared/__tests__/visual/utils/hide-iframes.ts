import { Page } from '@playwright/test';

export async function hideIframes(page: Page) {
  await page.addStyleTag({
    content: `
      iframe {
        display: none;
      }

      .video-container::after {
        content: 'Video Placeholder';
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 24px;
        background: #ccc;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      `,
  });
}
