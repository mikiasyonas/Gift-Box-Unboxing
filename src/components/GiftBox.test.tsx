import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react';
import GiftBox from './GiftBox';

vi.mock('react-confetti', () => ({
  default: () => null
}));

describe('GiftBox', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    Object.defineProperty(window, 'innerHeight', { value: 768 });
  });

  test('renders gift box with initial state', () => {
    render(<GiftBox />);
    
    expect(screen.getByText('20% Bonus')).toBeInTheDocument();
  });

  test('opens gift box on click', () => {
    render(<GiftBox />);
    
    const giftBox = screen.getByText('20% Bonus').closest('.box');
    fireEvent.click(giftBox!);

    expect(giftBox).toHaveClass('open');
  });

  test('opens gift box on Enter key press', () => {
    render(<GiftBox />);
    
    const giftBox = screen.getByText('20% Bonus').closest('.box');
    fireEvent.keyDown(giftBox!, { key: 'Enter' });

    expect(giftBox).toHaveClass('open');
  });

  test('opens gift box on Space key press', () => {
    render(<GiftBox />);
    
    const giftBox = screen.getByText('20% Bonus').closest('.box');
    fireEvent.keyDown(giftBox!, { key: ' ' });

    expect(giftBox).toHaveClass('open');
  });

  test('calls onOpen callback when gift is opened', () => {
    const mockOnOpen = vi.fn();
    render(<GiftBox onOpen={mockOnOpen} />);
    
    const giftBox = screen.getByText('20% Bonus').closest('.box');
    fireEvent.click(giftBox!);

    expect(mockOnOpen).toHaveBeenCalledOnce();
  });
});