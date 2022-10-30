import { render, screen } from '@testing-library/react';
import App from './App';

import testUser from './data/data'


test('renders learn react link', () => {
  render(<App user={testUser} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
