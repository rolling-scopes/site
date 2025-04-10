import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { MentorshipAfterRegister } from './mentorship-after-register';

const latinSymbolsRegExp = /^[?!,.a-zA-Z0-9\s]+$/;
const cyrillicSymbolsRegExp = /^[?!,.а-яА-ЯёЁ0-9\s]+$/;

let widget: HTMLElement;
let title: HTMLElement;
let steps: HTMLElement[];

describe('MentorsAfterRegister component without props', () => {
  beforeEach(() => {
    render(<MentorshipAfterRegister />);
    widget = screen.getByTestId('mentors-after-register');
    title = screen.getByTestId('widget-title');
    steps = screen.getAllByTestId('after-register-step');
  });

  it('renders widget without crashing', () => {
    expect(widget).toBeVisible();
  });

  it('displays correct title', () => {
    expect(title).toBeVisible();
    expect(title).toHaveTextContent('After Completing the Registration');
  });

  it('displays all steps', () => {
    expect(steps).toHaveLength(3);
  });

  it('displays correct steps with headers & content in English', () => {
    steps.forEach((step) => {
      expect(step).toBeVisible();
      expect(step).not.toBeEmptyDOMElement();
      expect(step.innerHTML).not.toBeNull();

      const stepHeader = step.querySelector('[data-testid="subtitle"]');
      const stepContent = step.querySelector('[data-testid="step-content"]');

      expect(stepHeader).not.toBeNull();
      expect(stepHeader).toBeVisible();

      expect(stepContent).not.toBeNull();
      expect(stepContent).toBeVisible();

      expect(stepHeader?.textContent).toMatch(latinSymbolsRegExp);
      expect(stepContent?.innerHTML).toMatch(latinSymbolsRegExp);
    });
  });
});

describe('MentorsAfterRegister component with "ru" lang prop', () => {
  beforeEach(() => {
    render(<MentorshipAfterRegister lang="ru" />);
    title = screen.getByTestId('widget-title');
    steps = screen.getAllByTestId('after-register-step');
  });

  it('displays correct title', () => {
    expect(title).toBeVisible();
    expect(title).toHaveTextContent('После Регистрации');
  });

  it('displays correct steps with cyrillic chars', () => {
    steps.forEach((step) => {
      const stepHeader = step.querySelector('[data-testid="subtitle"]');
      const stepContent = step.querySelector('[data-testid="step-content"]');

      expect(stepHeader?.textContent).toMatch(cyrillicSymbolsRegExp);
      expect(stepContent?.innerHTML).toMatch(cyrillicSymbolsRegExp);
    });
  });
});
