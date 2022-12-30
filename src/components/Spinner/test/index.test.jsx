import React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from '../index.jsx';

describe('Spinner', () => {
  it('Should render the spinner correctly', () => {
    const { getByTestId } = render(<Spinner />);

    expect(getByTestId('spinner')).toBeInTheDocument();
    expect(getByTestId('spinner')).toHaveClass('fingerprint-spinner');
  });
});
