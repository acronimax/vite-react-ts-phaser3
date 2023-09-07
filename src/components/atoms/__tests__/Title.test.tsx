import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Title from '../Title';

describe('atoms/Title', () => {
  const mockText = 'mock title';
  it('should render correctly', () => {
    // ARRANGE
    render(<Title text={mockText} />);
  });
  it('should render a mock title', () => {
    // ARRANGE
    render(<Title text={mockText} />);
    // ASSERT
    // @ts-ignore
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      mockText
    );
  });
});
