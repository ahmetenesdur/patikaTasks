import { render, screen } from '@testing-library/react';

import Header from './Header';

test('renders Header component', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Emoji Search/i);
    expect(headerElement).toBeInTheDocument();
});