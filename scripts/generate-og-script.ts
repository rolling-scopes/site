#!/usr/bin/env tsx

import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';

import { RS_PAGES } from './shared/constants';
import { ensureDirExists } from './utils/ensure-dir-exists';
import { generateImage } from './utils/generate-image';
import { getCombinedDataCourses } from './utils/get-combain-data-courses';
import { fonts } from './utils/load-fonts';
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
  for (const pageKey of Object.keys(RS_PAGES) as Array<keyof typeof RS_PAGES>) {
    const page = RS_PAGES[pageKey];
    const tree = await createPageTree({ page });

    if (!tree) {
      console.error(`Skipping image for "${page.title}" due to failed tree creation.`);
      continue;
    }

    const buffer: Buffer | null = await generateImage(tree, fonts);

    if (!buffer) {
      throw new Error(`Doesn't generate image for "${page.title}"`);
    }

    const fileName: string =
      `${page.title.toLowerCase()}`
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/-+/g, '-') + '.png';

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
