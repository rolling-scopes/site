import React from 'react';
// import { StaticImageData } from 'next/image';
import { ImageResponse } from 'next/og';

import { stylesCourseTree } from './generate-courses-tree.styles';
import { fonts } from '../../utils/load-fonts';
import { loadImageAsDataUri } from '../../utils/load-image-as-data-uri';

const rsStudentPromise = loadImageAsDataUri('src/shared/assets/rs-school.webp');

// type CourseData = {
//   name: string;
//   logo: StaticImageData;
//   startDate: string;
// };

type CourseLogo = {
  src: string; // Data URI или URL
  width: number;
  height: number;
};

type CourseData = {
  name: string;
  logo: CourseLogo;
  startDate: string;
};

export async function createCourseTree(course: CourseData): Promise<ImageResponse> {
  const { name, logo, startDate } = course;
  const rsStudentImg = await rsStudentPromise;

  return new ImageResponse((
    <div style={stylesCourseTree.container}>
      <div style={stylesCourseTree.leftSection}>
        <img
          src={rsStudentImg}
          width={logo.width}
          height={logo.height}
          style={stylesCourseTree.logo}
          alt="Sloth mascot works on the laptop"
        />
        <h1 style={stylesCourseTree.title}>RS School</h1>
        <p style={stylesCourseTree.subtitle}>Free courses. High motivation</p>
      </div>
      <div style={stylesCourseTree.rightSection}>
        <img
          src={logo.src}
          width={logo.width}
          height={logo.height}
          style={stylesCourseTree.courseLogo}
          alt={`${name} logo`}
        />
        <h2 style={stylesCourseTree.courseTitle}>{`${name} Course`}</h2>
        <p style={stylesCourseTree.startDate}>{`Start: ${startDate}`}</p>
      </div>
    </div>
  ),
  {
    width: 1200,
    height: 630,
    fonts: fonts,
  });
}
