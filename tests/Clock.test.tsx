import { act, getByTestId, render, screen } from '@testing-library/react';

import Clock from '../src/Clock';
import React from 'react';

describe('Clock', () => {
  it('renders headline', () => {
    const clock = render(<Clock tmz="AST" />);
    expect(clock).toBeTruthy();
  });
  it('shows the right time', ()=>{
    const {baseElement} = render(<Clock tmz='CET'/>)
    const clockElement = getByTestId(baseElement, 'clockComponent')
    act(()=>{
      setTimeout(()=>{
        const event = new Date();
        const laterTime = event
          .toLocaleString('en-GB', { timeZone:'CET' })
          .slice(12);
          expect(clockElement.textContent).toBe(laterTime)
      }, 5000)
    })
  })
});
