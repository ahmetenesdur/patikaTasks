import { render, screen } from '@testing-library/react';
import EmojiResults from './EmojiResults';

test('renders EmojiResults component', () => {
    const emojiData = [
        {
            title: 'Grinning',
            symbol: '😀'
        }
    ];
    render(<EmojiResults emojiData={emojiData} />);
    const emojiResultRowElement = screen.getByText(/Grinning/i);
    expect(emojiResultRowElement).toBeInTheDocument();
});

test('copy emoji to clipboard', () => {
    const emojiData = [
        {
            title: 'Grinning',
            symbol: '😀'
        }
    ];
    render(<EmojiResults emojiData={emojiData} />);
    const emojiResultRowElement = screen.getByText(/Grinning/i);
    expect(emojiResultRowElement).toBeInTheDocument();
});