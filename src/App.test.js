import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shovit there link', () => {
  render(<App />);
  const linkElement = screen.getByText(/shovit there/i);
  expect(linkElement).toBeInTheDocument();
});
