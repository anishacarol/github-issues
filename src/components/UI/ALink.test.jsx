import React from 'react';
import { render } from '@testing-library/react';
import ALink from './ALink';

test('renders learn react link', () => {
  const { container } = render(<ALink href="detail" text="Detail page" />);
  expect(container.firstChild).toMatchLastSnapshot();
});
