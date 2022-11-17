import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './index';

test('Todo component', () => {
    render(<Todo />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Add' });
    const items = screen.getAllByText(/learn/i);

    userEvent.type(input, 'Learn Web3');
    userEvent.click(button);

    expect(screen.getByText('Learn Web3')).toBeInTheDocument();
    expect(items.length).toEqual(3);
});