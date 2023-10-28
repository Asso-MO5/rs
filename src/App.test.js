import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/mo5/i);
  expect(linkElement).toBeInTheDocument();
});
