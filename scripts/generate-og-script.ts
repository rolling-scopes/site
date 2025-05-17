#!/usr/bin/env tsx

import { JSX } from 'react';
import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';

import { Descriptions, RS_PAGES } from './shared/constants';
import { ensureDirExists } from './utils/ensure-dir-exists';
import { generateImage } from './utils/generate-image';
import { getCombinedDataCourses } from './utils/get-combain-data-courses';
import { fonts } from './utils/load-fonts';
import { loadImageAsDataUri } from './utils/load-image-as-data-uri';
import { createCourseTree } from './view/courses-tree/generate-courses-tree';
import { createPageTree } from './view/pages-tree/generate-pages-tree';
import { OG_COURSES_FOLDER, OG_FOLDER } from '@/shared/constants';

const ogDir: string = path.join(process.cwd(), 'public', OG_FOLDER);
const ogCoursesDir: string = path.join(ogDir, OG_COURSES_FOLDER);

await ensureDirExists(ogDir);
await ensureDirExists(ogCoursesDir);

async function generateOgCourses(): Promise<void> {
  const courseLogos = await getCombinedDataCourses();

  for (const course of courseLogos) {
    const tree = await createCourseTree(course);

    const buffer: Buffer | null = await generateImage(tree, fonts);

    if (!buffer) {
      throw new Error(`Doesn't generate image for "${course.normalizeName}"`);
    }

    await fs.writeFile(path.join(ogCoursesDir, `${course.normalizeName}.png`), buffer);
    console.log(`${course.normalizeName} created`);
  }
}

async function generateOgImagePages(): Promise<void> {
  const rsBannerPromise: Promise<string> = loadImageAsDataUri('src/shared/assets/svg/RsBanner.svg');
  const rsMascotsPromise: Promise<string> = loadImageAsDataUri(
    'src/shared/assets/mentor-with-his-students.webp',
  );
  const mapBgPromise: Promise<string> = loadImageAsDataUri('src/shared/assets/map.webp');

  const [rsBannerUri, rsMascotsUri, mapBgUri] = await Promise.all([
    rsBannerPromise,
    rsMascotsPromise,
    mapBgPromise,
  ]);

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
    await generateOgCourses();
    console.log('All Open Graph images generated successfully');
  } catch (err) {
    console.error('Error generating Open Graph images:', err);
    process.exit(1);
  }
}

main();
