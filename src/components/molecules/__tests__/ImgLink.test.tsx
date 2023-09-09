import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ImgLink from '../ImgLink';

describe('molecules/ImgLink', () => {
  it('should render correctly', () => {
    render(
      <ImgLink>
        <img src="https://placehold.co/600x400/png" alt="test alt" />
      </ImgLink>
    );
  });
  it('should render and image with a placeholder url', () => {
    render(
      <ImgLink>
        <img src="https://placehold.co/600x400/png" alt="test alt" />
      </ImgLink>
    );
    // @ts-ignore
    expect(screen.getByRole('img')).toBeDefined();
  });
});
