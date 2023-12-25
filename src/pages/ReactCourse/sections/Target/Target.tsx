import React from 'react';
import { Title } from '../../../../components';

export const Target = () => {
  return (
    <div className="rs-target container">
      <div className="rs-target content">
        <Title text="Target audience" hasAsterisk />
        <div>
          Students of the RS School from the 2022Q3, which has passed RS School Stage #2 as well as
          new students with practical experience and knowledge of:
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>
              Git, GitHub (clone, add, commit, push, pull, merge, rebase, working with Pull Request)
            </li>
            <li>NPM, Webpack</li>
            <li>CSS3 / HTML5</li>
            <li>Chrome DevTools, Figma</li>
            <li>Understanding of the REST</li>
          </ul>
        </div>
        <div>
          Attention! Mentors on this course will be first assigned to the graduates of the RS School
          Stage #2.
        </div>

        <div>
          <button>Register</button>
        </div>
      </div>

      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};
