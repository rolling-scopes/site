import { render, screen } from '@testing-library/react';

import { StudyPath } from './study-path';

const stages = ['courses', 'jsEn', 'jsRu', 'angular', 'awsDev'] as const;

describe('StudyPath Component', () => {
  it.each([stages])('renders component with title, intro and stages correctly for %o', (page) => {
    const studyPath = render(<StudyPath page={page} />);

    const sectionTitle = studyPath.getByRole('heading', { level: 2 });
    const sectionIntro = studyPath.getAllByRole('paragraph')[0];

    const component = screen.getByTestId('study-path');
    const title = screen.getByTestId('widget-title');
    const intro = screen.getByTestId('section-intro');
    const stagesContainer = screen.getByTestId('stages');

    expect(component).toBeVisible();
    expect(stagesContainer).toBeVisible();

    expect(title).toBeVisible();
    expect(title.innerText).toBe(sectionTitle.innerText);

    expect(intro).toBeVisible();
    expect(intro.innerHTML).toBe(sectionIntro.innerHTML);
  });
});
