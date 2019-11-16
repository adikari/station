import React from 'react';
import { render } from '@testing-library/react';
import { Homepage } from './';

describe('Homepage', () => {
  it('should render the Homepage link', () => {
    const { getByText } = render(<Homepage />);
    expect(getByText('Homepage')).toBeInTheDocument();
  });
});
