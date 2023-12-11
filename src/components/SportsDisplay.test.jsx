import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SportsDisplay from './SportsDisplay';
import loaderStyles from './Loader.module.css';

const mockSportsData = [
    { name: 'Soccer', description: 'Description for Soccer' },
    { name: 'Basketball', description: 'Description for Basketball' },
    { name: 'Tennis', description: 'Description for Tennis' },
];

vi.mock('../data/Sport', () => ({
    ContentRepository: class {
        getFeaturedSports() {
            return Promise.resolve(mockSportsData);
        }
    }
}));

describe('SportsDisplay', () => {

    it('renders the Loader component initially', () => {
        render(<SportsDisplay />);
        const loaderElement = document.querySelector(`.${loaderStyles.loaderContainer}`);
        expect(loaderElement).toBeInTheDocument();
    });


    it('renders SportCard components after data fetching', async () => {
        render(<SportsDisplay />);

        await waitFor(() => {
            expect(screen.getByText('Soccer')).toBeInTheDocument();
            expect(screen.getByText('Basketball')).toBeInTheDocument();
            expect(screen.getByText('Tennis')).toBeInTheDocument();
        }, { timeout: 10000 });
    });


    it('allows clicking the "3 New Sports" button', async () => {
        render(<SportsDisplay />);
        
        await waitFor(() => {
          expect(screen.getByText('Soccer')).toBeInTheDocument();
        });

        const newSportsButton = screen.getByText('3 New Sports');
        fireEvent.click(newSportsButton);
      
      });


      it('allows clicking the "Re-Order These Sports" button', async () => {
        render(<SportsDisplay />);
        
        await waitFor(() => {
          expect(screen.getByText('Soccer')).toBeInTheDocument();
        });
      
        const reorderButton = screen.getByText('Re-Order These Sports');
        fireEvent.click(reorderButton);

      });
      
      

})
