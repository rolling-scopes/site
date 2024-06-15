import { screen } from '@testing-library/react';
import { Communication } from './communication';
import { renderWithRouter } from '@/__tests__/utils';

const jsCourseName = 'js / front-end en';
const nodeCourseName = 'node.js';
const jsDiscLink = 'https://discord.com/invite/uW5cCHR';
const nodeDiscLink = 'https://discord.com/invite/8BFb8va';

describe('Communication section tests', () => {
  it('Renders correct title "Communication"', async () => {
    renderWithRouter(<Communication courseName={jsCourseName} />);
    const title = screen.getByText('Communication');

    expect(title).toBeVisible();
  });
  it('Renders correct title "Discord is the main communication channel in RS School"', () => {
    renderWithRouter(<Communication courseName={jsCourseName} />);
    const subtitle = screen.getByText(/Discord is the main communication channel in RS School/i);

    expect(subtitle).toBeVisible();
  });
  it('Renders correct link to the js course', () => {
    renderWithRouter(<Communication courseName={jsCourseName} />);
    const link = screen.getByText(/course discord server/i);

    expect(link).toBeVisible();
    expect(link.getAttribute('href')).toMatch(jsDiscLink);
  });
  it('Renders correct link to the nodeJs course', () => {
    renderWithRouter(<Communication courseName={nodeCourseName} />);
    const link = screen.getByText(/course discord server/i);

    expect(link).toBeVisible();
    expect(link.getAttribute('href')).toMatch(nodeDiscLink);
  });
});
