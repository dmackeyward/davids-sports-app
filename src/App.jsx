import styles from './App.module.css'
import SportsDisplay from './components/SportsDisplay';

function App() {
  return (
    <div>
      <header className={styles.title}>
        <h1>David&apos;s Sports Application</h1>
      </header>
      <main>
        <SportsDisplay />
      </main>
    </div>
  );
}

export default App;
