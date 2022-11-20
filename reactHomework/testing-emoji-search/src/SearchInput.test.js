import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from './SearchInput';

test('renders SearchInput component', () => {
    const textChange = jest.fn();
    render(<SearchInput textChange={textChange} />);
    const inputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, 'Grinning');
    expect(textChange).toHaveBeenCalledTimes(8);
});