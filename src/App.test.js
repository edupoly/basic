import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  var {getByTestId,getByRole,getAllByRole}=render(<App />);
  
  //expect(getByRole('heading')).toHaveTextContent(/Welcome/)

  expect(getByTestId('head')).toHaveTextContent(/Welcome/)
  
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
