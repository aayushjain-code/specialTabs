// __tests__/App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('First Tab Content')).toBeInTheDocument();
  });

  test('renders the first tab content by default', () => {
    render(<App />);
    expect(screen.getByText('First Tab Content')).toBeInTheDocument();
  });

  test('switches to second tab content when second tab is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Second'));
    expect(screen.getByText('Second Tab Content')).toBeInTheDocument();
  });

  test('switches to third tab content when third tab is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Third'));
    expect(screen.getByText('Third Tab Content')).toBeInTheDocument();
  });

  test('switches back to first tab content when first tab is clicked again', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Second'));
    fireEvent.click(screen.getByText('First'));
    expect(screen.getByText('First Tab Content')).toBeInTheDocument();
  });
});
