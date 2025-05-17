import React from 'react';

import { stylesCourseTree } from './generate-courses-tree.styles';
import { CourseData } from '../../types/types';
import { loadImageAsDataUri } from '../../utils/load-image-as-data-uri';

const rsStudentPromise = loadImageAsDataUri('src/shared/assets/rs-school.webp');

export async function createCourseTree(
  course: CourseData,
): Promise<React.JSX.Element> {
  const { name, logo, startDate } = course;
  const rsStudentImg = await rsStudentPromise;

  return (
    <div style={stylesCourseTree.container}>
      <div style={stylesCourseTree.leftSection}>
        <img
          src={rsStudentImg}
          style={stylesCourseTree.logo}
          alt="Sloth mascot works on the laptop"
        />
        <h1 style={stylesCourseTree.title}>RS School</h1>
        <p style={stylesCourseTree.subtitle}>Free courses. High motivation</p>
      </div>
      <div style={stylesCourseTree.rightSection}>
        <img
          src={logo.src}
          style={stylesCourseTree.courseLogo}
          alt={`${name} logo`}
        />
        <h2 style={stylesCourseTree.courseTitle}>{`${name} Course`}</h2>
        <p style={stylesCourseTree.startDate}>{`Start: ${startDate}`}</p>
      </div>
    </div>
  );
}
