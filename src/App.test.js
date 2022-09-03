import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  var {getByTestId}=render(<App />);
  expect(getByTestId('head')).toHaveTextContent('Learn React')
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
