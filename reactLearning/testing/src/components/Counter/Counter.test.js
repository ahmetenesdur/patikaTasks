import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './index';

test('Counter increments and decrements when the buttons are clicked', () => {
    render(<Counter />);

    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const count = screen.getByText(/count/i);

    expect(count).toHaveTextContent('Count: 0');

    userEvent.click(incrementButton);
    expect(count).toHaveTextContent('Count: 1');

    userEvent.click(decrementButton);
    expect(count).toHaveTextContent('Count: 0');
});