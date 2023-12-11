import { useState, useEffect } from 'react';
import { ContentRepository } from '../data/Sport';
import SportCard from './SportCard';
import Loader from './Loader';
import styles from './SportsDisplay.module.css'; 

const SportsDisplay = () => {

  const [sports, setSports] = useState(() => {
    const savedSports = JSON.parse(localStorage.getItem('selectedSports'));
    return savedSports || [];
  });

  const [fullSportsList, setFullSportsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sports.length) {
      setLoading(true);
      const repo = new ContentRepository();
      repo.getFeaturedSports().then(fetchedSportsList => {
        setFullSportsList(fetchedSportsList);
        const shuffled = fetchedSportsList.sort(() => 0.5 - Math.random());
        setSports(shuffled.slice(0, 3));
        setLoading(false);
      });
    }
  }, [sports.length]);

  useEffect(() => {
    localStorage.setItem('selectedSports', JSON.stringify(sports));
  }, [sports]);

  const handleRemoveSport = (sportToRemove) => {
    setSports(currentSports => {
        const updatedSports = currentSports.filter(sport => sport.name !== sportToRemove.name);

        const availableSports = fullSportsList.filter(sport => 
            !updatedSports.some(currentSport => currentSport.name === sport.name));

        if (availableSports.length > 0) {
            const randomSport = availableSports[Math.floor(Math.random() * availableSports.length)];
            updatedSports.push(randomSport); 
        }

        return updatedSports;
    });
  };

  if (loading) {
    return <Loader />
  }

  const loadNewSports = () => {
    const newAvailableSports = fullSportsList.filter(fullSport => 
      !sports.some(displayedSport => displayedSport.name === fullSport.name));
  
    let shuffledNewSports = newAvailableSports.sort(() => 0.5 - Math.random());
  
    setSports(shuffledNewSports.slice(0, 3));
  };
  
  
  const reorderSports = () => {
    setSports(currentSports => {
      let shuffled = [...currentSports];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
      }
      return shuffled;
    });
  };
  
  
  return (
    <div className={styles.sportsContainer}>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={loadNewSports}>3 New Sports</button>
        <button className={styles.button} onClick={reorderSports}>Re-Order These Sports</button>
      </div>
      <div className={styles.sportsCardsContainer}>
        {sports.map((sport, index) => (
          <SportCard key={index} sport={sport} onRemove={handleRemoveSport} />
        ))}
      </div>
    </div>
  );
};

export default SportsDisplay;