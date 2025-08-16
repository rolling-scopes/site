import React from 'react';
import { ImageResponse } from 'next/og';

import { stylesCourseTree } from './generate-courses-tree.styles';
import { getFonts } from '../../utils/load-fonts';
import { loadImageAsDataUri } from '../../utils/load-image-as-data-uri';
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from '@/shared/constants';

type CourseLogo = {
  src: string;
  width: number;
  height: number;
};

type CourseData = {
  name: string;
  logo: CourseLogo;
  startDate: string;
};

const imageCache = new Map<string, Promise<string | null>>();

function loadSafeImage(filePath: string): Promise<string | null> {
  if (!imageCache.has(filePath)) {
    const promise = loadImageAsDataUri(filePath).catch((err) => {
      console.error(`[OG] Failed to load image: ${filePath}`, err);
      return null;
    });

    imageCache.set(filePath, promise);
  }

  return imageCache.get(filePath)!;
}

export async function createCourseTree(course: CourseData): Promise<ImageResponse> {
  const { name, logo, startDate } = course;
  const rsStudentImg = await loadSafeImage('src/shared/assets/rs-school.webp');
  const fonts = await getFonts();

  return new ImageResponse(
    (
      <div style={stylesCourseTree.container}>
        <div style={stylesCourseTree.leftSection}>
          {rsStudentImg && (
            <img
              src={rsStudentImg}
              width={logo.width}
              height={logo.height}
              style={stylesCourseTree.logo}
              alt=""
              aria-hidden="true"
            />
          )}
          <h1 style={stylesCourseTree.title}>RS School</h1>
          <p style={stylesCourseTree.subtitle}>Free courses. High motivation</p>
        </div>
        <div style={stylesCourseTree.rightSection}>
          <img
            src={logo.src}
            width={logo.width}
            height={logo.height}
            style={stylesCourseTree.courseLogo}
            alt=""
            aria-hidden="true"
          />
          <h2 style={stylesCourseTree.courseTitle}>{`${name} Course`}</h2>
          <p style={stylesCourseTree.startDate}>{`Start: ${startDate}`}</p>
        </div>
      </div>
    ),
    {
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      fonts: fonts,
    },
  );
}
