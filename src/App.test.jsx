import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'; 
import loaderStyles from './components/Loader.module.css';

const mockSportsData = [
  { name: 'Soccer', description: 'Description for Soccer' },
  { name: 'Basketball', description: 'Description for Basketball' },
  { name: 'Tennis', description: 'Description for Tennis' },
];

vi.mock('./data/Sport', () => ({
  ContentRepository: class {
      getFeaturedSports() {
          return Promise.resolve(mockSportsData);
      }
  }
}));

describe('App Component', () => {

  it('renders the header with the correct text', () => {
    render(<App />);
    const headerElement = screen.getByText("David's Sports Application");
    expect(headerElement).toBeTruthy();
  });

  it('renders the Loader component initially', () => {
    render(<App />);
    const loaderElement = document.querySelector(`.${loaderStyles.loaderContainer}`);
    expect(loaderElement).toBeInTheDocument();
  });

  it('renders the SportsDisplay component', async () => {
    render(<App />);
  
    await waitFor(() => {
      const firstSportElement = screen.getByText('Soccer'); 
      const secondSportElement = screen.getByText('Basketball'); 
      const thirdSportElement = screen.getByText('Tennis'); 
      expect(firstSportElement).toBeInTheDocument();
      expect(secondSportElement).toBeInTheDocument();
      expect(thirdSportElement).toBeInTheDocument();
    });
  });

});
