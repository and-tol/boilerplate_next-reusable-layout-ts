import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Block from './Block';

describe('<Block />', () => {
  test('it should mount', () => {
    render(<Block />);
    
    const block = screen.getByTestId('Block');

    expect(block).toBeInTheDocument();
  });
});