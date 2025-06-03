import { render, screen } from '@testing-library/react';

import { StudyPath } from './study-path';

describe('StudyPath Component', () => {
  it('renders component with title, intro and stages correctly', () => {
    const studyPath = render(<StudyPath />);

    const sectionTitle = studyPath.getByRole('heading', { level: 2 });
    const sectionIntro = studyPath.getAllByRole('paragraph')[0];

    const component = screen.getByTestId('study-path');
    const title = screen.getByTestId('widget-title');
    const intro = screen.getByTestId('section-intro');
    const stagesContainer = screen.getByTestId('stages');

    expect(component).toBeVisible();
    expect(stagesContainer).toBeVisible();

    expect(title).toBeVisible();
    expect(title).toHaveTextContent(sectionTitle.innerHTML);

    expect(intro).toBeVisible();
    expect(intro).toHaveTextContent(sectionIntro.innerHTML);
  });
});
