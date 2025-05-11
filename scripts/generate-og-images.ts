#!/usr/bin/env tsx

import { createElement } from 'react';
import dayjs from 'dayjs';
import 'dotenv/config';
import { readFileSync } from 'fs';
import fs from 'fs/promises';
import { ImageResponse } from 'next/og';
import path from 'path';

import { COURSE_TITLES } from '../dev-data/course-titles.data';

const COURSE_SLUGS = {
  JS_PRESCHOOL_RU: 'javascript-preschool-ru',
  JS_EN: 'javascript',
  JS_RU: 'javascript-ru',
  REACT: 'reactjs',
  ANGULAR: 'angular',
  NODE: 'nodejs',
  AWS_FUNDAMENTALS: 'aws-fundamentals',
  AWS_CLOUD_DEVELOPER: 'aws-cloud-developer',
  AWS_DEVOPS: 'aws-devops',
} as const;

type CourseKey = keyof typeof COURSE_SLUGS;

const COURSES_JSON_URL = process.env.API_URL;

type ApiCourse = {
  startDate: string;
  descriptionUrl: string;
};

const fontRegular = readFileSync(
  path.join(process.cwd(), 'public', 'fonts', 'Inter_28pt-Regular.ttf'),
);
const fontBold = readFileSync(path.join(process.cwd(), 'public', 'fonts', 'Inter_28pt-Bold.ttf'));

async function fetchCoursesList(): Promise<ApiCourse[]> {
  const res = await fetch(COURSES_JSON_URL);

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }
  return (await res.json()) as ApiCourse[];
}

async function generateOGCourses() {
  try {
    const coursesList = await fetchCoursesList();
    const ogDir = path.join(process.cwd(), 'public', 'og-images');

    const stat = await fs.stat(ogDir).catch((err) => {
      if (err.code === 'ENOENT') {
        return null;
      }
      throw err;
    });

    if (!stat || !stat.isDirectory()) {
      await fs.mkdir(ogDir, { recursive: true });
    }

    const rsLogoPath = path.join(
      process.cwd(),
      'src',
      'shared',
      'assets',
      'og-logos',
      'rs-school.png',
    );
    const buf = await fs.readFile(rsLogoPath);
    const rsLogoDataUri = `data:image/png;base64,${buf.toString('base64')}`;

    for (const key of Object.keys(COURSE_TITLES) as CourseKey[]) {
      const slug = COURSE_SLUGS[key];
      const title = COURSE_TITLES[key];

      const courseInfo = coursesList.find((c) => c.descriptionUrl.toLowerCase().endsWith(slug));

      let rawDate;

      if (!courseInfo) {
        rawDate = '';
      } else {
        rawDate = courseInfo.startDate;
      }

      const formattedDate = rawDate ? dayjs(rawDate).format('MMM DD, YYYY') : 'TBD';

      let logoDataUri: string | null = null;

      const svgPath = path.join(
        process.cwd(),
        'src',
        'shared',
        'assets',
        'og-logos',
        `${slug}.svg`,
      );
      const svgBuf = await fs.readFile(svgPath);

      logoDataUri = `data:image/svg+xml;base64,${svgBuf.toString('base64')}`;

      if (!logoDataUri) {
        throw new Error(`No logo found for course ${slug}`);
      }

      const tree = createElement(
        'div',
        {
          style: {
            display: 'flex',
            width: 1200,
            height: 630,
            fontFamily: 'Inter',
            weight: 400,
          },
        },
        // Left column
        createElement(
          'div',
          {
            style: {
              flex: 3,
              background: '#000',
              color: '#f0f2f5',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
              boxSizing: 'border-box',
              gap: 25,
            },
          },
          createElement('img', {
            src: rsLogoDataUri,
            width: 250,
            height: 250,
            alt: 'RS School Logo',
          }),
          createElement(
            'h1',
            {
              style: {
                fontSize: 72,
                fontWeight: 700,
                fontFamily: 'Inter',
                margin: 0,
              },
            },
            'RS School',
          ),
          createElement(
            'p',
            {
              style: {
                fontSize: 36,
                fontFamily: 'Inter',
                fontWeight: 400,
                margin: 0,
              },
            },
            'Free courses. High motivation',
          ),
        ),

        // Right column
        createElement(
          'div',
          {
            style: {
              flex: 2,
              background: '#ffda1f',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 25,
              padding: 20,
              boxSizing: 'border-box',
            },
          },
          createElement('img', {
            src: logoDataUri,
            width: 250,
            height: 250,
            alt: `${title} logo`,
            style: { objectFit: 'contain' },
          }),
          createElement(
            'h2',
            {
              style: {
                fontSize: 48,
                color: '#000',
                margin: 0,
                fontFamily: 'Inter',
                fontWeight: 700,
                textAlign: 'center',
              },
            },
            `${title} Course`,
          ),
          createElement(
            'p',
            {
              style: {
                fontSize: 36,
                color: '#000',
                margin: 0,
                fontFamily: 'Inter',
                fontWeight: 400,
              },
            },
            `Start: ${formattedDate}`,
          ),
        ),
      );

      const imageRes = new ImageResponse(tree, {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontRegular,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: fontBold,
            weight: 700,
            style: 'normal',
          },
        ],
      });

      const buffer = Buffer.from(await imageRes.arrayBuffer());

      await fs.writeFile(path.join(ogDir, `${slug}.png`), buffer);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(`Unknown error: ${error}`);
    }
  }
}

const RS_PAGES = {
  MAIN: 'Home',
  MENTORSHIP: 'Mentorship',
  COMMUNITY: 'Community',
  DOCS: 'Docs',
  COURSES: 'Courses',
} as const;

async function generateOgImagePage() {
  const ogDir = path.join(process.cwd(), 'public', 'og-images-pages');

  const stat = await fs.stat(ogDir).catch((err) => {
    if (err.code === 'ENOENT') {
      return null;
    }
    throw err;
  });

  if (!stat || !stat.isDirectory()) {
    await fs.mkdir(ogDir, { recursive: true });
  }

  const rsBunnerPath = path.join(
    process.cwd(),
    'src',
    'shared',
    'assets',
    'og-logos',
    'rs-banner.png',
  );
  const buf = await fs.readFile(rsBunnerPath);
  const rsBunnerPathUri = `data:image/png;base64,${buf.toString('base64')}`;

  const rsStudentsPath = path.join(
    process.cwd(),
    'src',
    'shared',
    'assets',
    'og-logos',
    'mentor-with-his-students.png',
  );
  const bufRsStudents = await fs.readFile(rsStudentsPath);
  const rsStudentsPathUri = `data:image/png;base64,${bufRsStudents.toString('base64')}`;

  const mapPath = path.join(process.cwd(), 'src', 'shared', 'assets', 'og-logos', 'map.png');
  const bufMap = await fs.readFile(mapPath);
  const mapPathUri = `data:image/png;base64,${bufMap.toString('base64')}`;

  for (const pageTitle of Object.keys(RS_PAGES)) {
    const title = RS_PAGES[pageTitle as keyof typeof RS_PAGES];

    const tree = createElement(
      'div',
      {
        style: {
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          alignItems: 'flex-start',
          padding: '100px 80px',
          margin: 0,
          backgroundColor: '#fff',
          fontFamily: 'Inter',
          color: '#000',
          boxSizing: 'border-box',
          position: 'relative',
        },
      },

      createElement('img', {
        src: mapPathUri,
        alt: 'RS Logo',
        height: 630,
        style: {
          position: 'absolute',
          top: 0,
          right: 120,
          objectFit: 'contain',
        },
      }),

      createElement(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 30,
            margin: 0,
          },
        },

        createElement(
          'h1',
          {
            style: {
              fontFamily: 'Inter',
              fontSize: 82,
              fontWeight: 700,
              margin: 0,
            },
          },
          `${title}`,
        ),

        createElement(
          'p',
          {
            style: {
              fontFamily: 'Inter',
              fontSize: 34,
              fontWeight: 400,
              color: '#000',
              width: '700px',
              margin: 0,
            },
          },
          'The Rolling Scopes School. Free courses. High motivation',
        ),
      ),

      createElement(
        'div',
        {
          style: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 0,
            position: 'absolute',
            bottom: 45,
            left: 50,
          },
        },

        createElement('img', {
          src: rsStudentsPathUri,
          alt: 'RS mascots',
          width: 430,
          style: { objectFit: 'contain' },
        }),
      ),

      createElement('div', {
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100vw',
          height: '36px',
          backgroundColor: '#ffda1f',
        },
      }),

      createElement('img', {
        src: rsBunnerPathUri,
        alt: 'RS Logo',
        width: 300,
        height: 300,
        style: {
          position: 'absolute',
          top: 60,
          right: 70,
          objectFit: 'contain',
        },
      }),
    );

    const imageRes = new ImageResponse(tree, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: fontBold,
          weight: 700,
          style: 'normal',
        },
      ],
    });

    const buffer = Buffer.from(await imageRes.arrayBuffer());

    await fs.writeFile(path.join(ogDir, `${title}.png`), buffer);
  }
}

generateOgImagePage().catch((err) => {
  console.error(err);
  process.exit(1);
});

generateOGCourses().catch((err) => {
  console.error(err);
  process.exit(1);
});
