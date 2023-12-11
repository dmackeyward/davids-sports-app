import PropTypes from 'prop-types';
import styles from './SportCard.module.css';

const SportCard = ({ sport, onRemove }) => {
  
  if (!sport) {
    return <div className={styles.missingData}>Missing Sport Data</div>;
  }

  return (
    <div className={styles.card}>
      <button className={styles.removeButton} onClick={() => onRemove(sport)}>X</button>
      <h2 className={styles.title}>{sport.name}</h2>
      <p className={styles.description}>{sport.description}</p>
    </div>
  );
};

SportCard.propTypes = {
  sport: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default SportCard;
