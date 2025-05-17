#!/usr/bin/env tsx

import { JSX } from 'react';
import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';

import { ensureDirExists } from './utils/ensure-dir-exists';
import { generateImage } from './utils/generate-image';
import { getCombinedDataCourses } from './utils/get-combain-data-courses';
import { type Font, loadFont } from './utils/load-fonts';
import { loadImageAsDataUri } from './utils/load-image-as-data-uri';
import { Descriptions, RS_PAGES } from './utils/open-graph.data';
import { createCourseTree } from './view/courses-tree/generate-courses-tree';
import { createPageTree } from './view/pages-tree/generate-pages-tree';

const fontRegularPromise: Promise<Font> = loadFont(400);
const fontBoldPromise: Promise<Font> = loadFont(700);

async function generateOGCourses(): Promise<void> {
  const courseLogos = await getCombinedDataCourses();

  const ogDir: string = path.join(process.cwd(), 'public', 'og-images');

  await ensureDirExists(ogDir);

  const rsLogoDataUriPromise: Promise<string> = loadImageAsDataUri(
    'src/shared/assets/rs-school.webp',
  );

  const [fontRegular, fontBold, rsLogoDataUri] = await Promise.all([
    fontRegularPromise,
    fontBoldPromise,
    rsLogoDataUriPromise,
  ]);

  const fonts: Font[] = [fontRegular, fontBold];

  const leftTitle: string = 'RS School';
  const leftSubtitle: string = 'Free courses. High motivation';

  for (const course of courseLogos) {
    const tree: JSX.Element = createCourseTree(
      course.name,
      leftTitle,
      leftSubtitle,
      course.startDate,
      rsLogoDataUri,
      course.logo.src,
    );

    const buffer: Buffer | null = await generateImage(tree, fonts);

    if (!buffer) {
      throw new Error(`Doesn't generate image for "${course.normalizeName}"`);
    }

    await fs.writeFile(path.join(ogDir, `${course.normalizeName}.png`), buffer);
    console.log(`${course.normalizeName} created`);
  }
}

async function generateOgImagePages(): Promise<void> {
  const rsBannerPromise: Promise<string> = loadImageAsDataUri('src/shared/assets/svg/RsBanner.svg');
  const rsMascotsPromise: Promise<string> = loadImageAsDataUri(
    'src/shared/assets/mentor-with-his-students.webp',
  );
  const mapBgPromise: Promise<string> = loadImageAsDataUri('src/shared/assets/map.webp');

  const ogDir: string = path.join(process.cwd(), 'public', 'og-images-pages');

  await ensureDirExists(ogDir);

  const [fontRegular, fontBold, rsBannerUri, rsMascotsUri, mapBgUri] = await Promise.all([
    fontRegularPromise,
    fontBoldPromise,
    rsBannerPromise,
    rsMascotsPromise,
    mapBgPromise,
  ]);

  const fonts: Font[] = [fontRegular, fontBold];

  for (const key of Object.keys(RS_PAGES) as Array<keyof typeof RS_PAGES>) {
    const title: string = RS_PAGES[key];
    const description: string = Descriptions[key];

    const tree: JSX.Element = createPageTree(
      title,
      description,
      rsBannerUri,
      rsMascotsUri,
      mapBgUri,
    );
    const buffer: Buffer | null = await generateImage(tree, fonts);
    const fileName: string = `${title.toLowerCase()}.png`.replace(/\s+/g, '-');

    if (!buffer) {
      throw new Error(`Doesn't generate image for "${title}"`);
    }

    await fs.writeFile(path.join(ogDir, fileName), buffer);
    console.log(`${fileName} created`);
  }
}

async function main() {
  try {
    await generateOgImagePages();
    await generateOGCourses();
    console.log('All Open Graph images generated successfully');
  } catch (err) {
    console.error('Error generating Open Graph images:', err);
    process.exit(1);
  }
}

main();
