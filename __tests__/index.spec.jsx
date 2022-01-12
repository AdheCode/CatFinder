import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchPage from '../pages/cats/search'

describe('Test Searching Page', () => {

  it('renders a heading', () => {
    render(<SearchPage />)

    const linkElement = screen.getByText(/No Cats to show/i);

    expect(linkElement).toBeInTheDocument();
  });

});