import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all sections with correct headings', () => {
  render(<App />);

  expect(screen.getByText(/Course Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Book Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Blog Details/i)).toBeInTheDocument();

  expect(screen.getByText(/Master React/i)).toBeInTheDocument();
  expect(screen.getByText(/React Learning/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Angular/i).length).toBeGreaterThan(0);
});
