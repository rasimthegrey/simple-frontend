import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI/CD', () => {
  render(<App />);
  const linkElement = screen.getByText(/Continuous Integration and Continuous Deployment/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders paragraph text', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a CI test!/i);
  expect(linkElement).toBeInTheDocument();
});