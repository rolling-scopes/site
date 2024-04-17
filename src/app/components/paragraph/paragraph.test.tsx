import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Paragraph } from './paragraph';

describe('Paragraph component', () => {
  it('renders children text correctly', () => {
    render(<Paragraph>Test Text</Paragraph>);

    const paragraphElement = screen.getByText('Test Text');
    expect(paragraphElement).toBeInTheDocument();
  });

  it('renders children components correctly', () => {
    render(
      <Paragraph>
        <span>Child Component</span>
      </Paragraph>,
    );

    const spanElement = screen.getByText('Child Component');
    expect(spanElement).toBeInTheDocument();
  });

  it('should not be in the document when no children is provided', () => {
    render(<Paragraph></Paragraph>);

    const paragraphElement = screen.queryByTestId('paragraph');
    expect(paragraphElement).not.toBeInTheDocument();
  });
});
