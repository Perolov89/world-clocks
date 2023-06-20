import { getByTestId, render, screen } from '@testing-library/react';
import App from '../src/App';
import Board from '../src/Board';
import React from 'react';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const headline = screen.getByText(
      /Clocks of Doom/i
    );
    expect(headline).toBeInTheDocument();
  });
  it('has section', () => {
    const {baseElement} = render(<Board />);
    const clockContainerElement = getByTestId(baseElement, 'clockContainer')
    expect(clockContainerElement).toBeTruthy()
  });
  it('section has 3 clocks', () => {
    render(<Board />);
    const clockTags = screen.getAllByTestId('clockComponent')
    expect(clockTags.length).toBe(3)
  })
});


