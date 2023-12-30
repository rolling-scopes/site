import React from 'react';
import { Button, Paragraph, Title } from '../../../../components';

import image from '../../../../assets/about.png';

export const Target = () => {
  return (
    <div className="rs-target container">
      <div className="rs-target content column-2">
        <div className="left description">
          <Title text="Target audience" hasAsterisk />
          <Paragraph>
            <div>
              Students of the RS School from the 2022Q3, which has passed RS School Stage #2 as well
              as new students with practical experience and knowledge of:
            </div>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>
                Git, GitHub (clone, add, commit, push, pull, merge, rebase, working with Pull
                Request)
              </li>
              <li>NPM, Webpack</li>
              <li>CSS3 / HTML5</li>
              <li>Chrome DevTools, Figma</li>
              <li>Understanding of the REST</li>
            </ul>
          </Paragraph>
          <Paragraph>
            Attention! Mentors on this course will be first assigned to the graduates of the RS
            School Stage #2.
          </Paragraph>

          <Button label={'Register'} href="https://rs.school/" />
        </div>
        <img className="right picture" src={image} alt="Logo" />
      </div>
    </div>
  );
};
