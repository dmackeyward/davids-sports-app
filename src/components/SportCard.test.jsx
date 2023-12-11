import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SportCard from './SportCard'; 

describe('SportCard', () => {

  const mockSport = {
    name: 'Soccer',
    description: 'A sport played by two teams of eleven players with a round ball.'
  };
  
  const mockOnRemove = vi.fn(); 

  it('renders correctly with sport data', () => {
    render(<SportCard sport={mockSport} onRemove={mockOnRemove} />);
    expect(screen.getByText('Soccer')).toBeTruthy();
    expect(screen.getByText('A sport played by two teams of eleven players with a round ball.')).toBeTruthy();
  });

  it('displays missing data message when sport is not provided', () => {
    render(<SportCard onRemove={mockOnRemove} />);
    expect(screen.getByText('Missing Sport Data')).toBeTruthy();
  });

  it('calls onRemove when the remove button is clicked', () => {
    render(<SportCard sport={mockSport} onRemove={mockOnRemove} />);
    fireEvent.click(screen.getByText('X'));
    expect(mockOnRemove).toHaveBeenCalledWith(mockSport);
  });
});
