import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders paragraph text', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a CI test!/i);
  expect(linkElement).toBeInTheDocument();
});