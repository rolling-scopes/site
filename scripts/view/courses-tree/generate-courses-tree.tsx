import React from 'react';

import { stylesCourseTree } from './generate-courses-tree.styles';

export function createCourseTree(
  title: string,
  leftTitle: string,
  leftSubtitle: string,
  formattedDate: string,
  rsLogoDataUriPromise: string,
  logoCourseUriPromise: string,
): React.JSX.Element {
  return (
    <div style={stylesCourseTree.container}>
      <div style={stylesCourseTree.leftSection}>
        <img
          src={rsLogoDataUriPromise}
          style={stylesCourseTree.logo}
          alt="RS School Logo"
        />
        <h1 style={stylesCourseTree.title}>{leftTitle}</h1>
        <p style={stylesCourseTree.subtitle}>{leftSubtitle}</p>
      </div>
      <div style={stylesCourseTree.rightSection}>
        <img
          src={logoCourseUriPromise}
          style={stylesCourseTree.courseLogo}
          alt={`${title} logo`}
        />
        <h2 style={stylesCourseTree.courseTitle}>{`${title} Course`}</h2>
        <p style={stylesCourseTree.startDate}>{`Start: ${formattedDate}`}</p>
      </div>
    </div>
  );
}
