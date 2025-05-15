#!/usr/bin/env tsx

import { JSX } from 'react';
import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';

import { getCourseInfo } from './utils/course-info';
import { ensureDirExists } from './utils/ensure-dir-exists';
import { createCourseTree } from './utils/generate-courses-tree';
import { generateImage } from './utils/generate-image';
import { createPageTree } from './utils/generate-page-tree';
import { getCoursesSchedule } from './utils/get-courses-schedule';
import { type Font, loadFont } from './utils/load-fonts';
import { loadImageAsDataUri } from './utils/load-image-as-data-uri';
import { COURSE_TITLES } from '../dev-data/course-titles.data';
import { COURSE_SLUGS, Descriptions, RS_PAGES } from '../dev-data/open-graph.data';

const fontRegularPromise: Promise<Font> = loadFont(400);
const fontBoldPromise: Promise<Font> = loadFont(700);

type CourseKey = keyof typeof COURSE_SLUGS;

async function generateOGCourses(): Promise<void> {
  const coursesSchedule = await getCoursesSchedule();

  if (!coursesSchedule) {
    return;
  }

  const ogDir: string = path.join(process.cwd(), 'public', 'og-images');

  await ensureDirExists(ogDir);

  const rsLogoDataUriPromise: Promise<string> = loadImageAsDataUri(
    'src/shared/assets/og-logos/rs-school.png',
    'image/png',
  );

  const [fontRegular, fontBold, rsLogoDataUri] = await Promise.all([
    fontRegularPromise,
    fontBoldPromise,
    rsLogoDataUriPromise,
  ]);

  const fonts: Font[] = [fontRegular, fontBold];

  const leftTitle: string = 'RS School';
  const leftSubtitle: string = 'Free courses. High motivation';

  for (const key of Object.keys(COURSE_TITLES) as CourseKey[]) {
    const slug: string = COURSE_SLUGS[key];
    const title: string = COURSE_TITLES[key];

    const formattedDate: string = getCourseInfo(coursesSchedule, slug);

    const logoDataUri: string = await loadImageAsDataUri(
      `src/shared/assets/og-logos/${slug}.svg`,
      'image/svg+xml',
    );

    const tree: JSX.Element = createCourseTree(
      title,
      leftTitle,
      leftSubtitle,
      formattedDate,
      rsLogoDataUri,
      logoDataUri,
    );

    const buffer: Buffer<ArrayBufferLike> | null = await generateImage(tree, fonts);

    if (!buffer) {
      throw new Error(`Doesn't generate image for "${slug}"`);
    }

    await fs.writeFile(path.join(ogDir, `${slug}.png`), buffer);
    console.log(`${slug} created`);
  }
}

async function generateOgImagePages(): Promise<void> {
  const rsBannerPromise: Promise<string> = loadImageAsDataUri(
    'src/shared/assets/og-logos/rs-banner.png',
    'image/png',
  );
  const rsMascotsPromise: Promise<string> = loadImageAsDataUri(
    'src/shared/assets/og-logos/mentor-with-his-students.png',
    'image/png',
  );
  const mapBgPromise: Promise<string> = loadImageAsDataUri(
    'src/shared/assets/og-logos/map.png',
    'image/png',
  );

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
    const buffer: Buffer<ArrayBufferLike> | null = await generateImage(tree, fonts);
    const fileName: string = `${title.toLowerCase()}.png`.replace(/\s+/g, '-');

    if (!buffer) {
      throw new Error(`Doesn't generate image for "${title}"`);
    }

    await fs.writeFile(path.join(ogDir, fileName), buffer);
    console.log(`${fileName} created`);
  }
}

generateOgImagePages().catch((err) => {
  console.error(err);
  process.exit(1);
});

generateOGCourses().catch((err) => {
  console.error(err);
  process.exit(1);
});
