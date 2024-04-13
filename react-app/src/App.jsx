import { useState, useEffect } from 'react';
import styles from './App.module.scss';

export function App() {
  const [counter, setCounter] = useState(0);

  // Fetch counter value from localStorage on component mount
  useEffect(() => {
    const savedCounter = localStorage.getItem('counter');
    const parsedCounter = savedCounter !== null ? parseInt(savedCounter) : 0;
    setCounter(parsedCounter);
    console.log("Fetched counter value from localStorage:", parsedCounter);
  }, []);

  // Save counter value to localStorage on update
  useEffect(() => {
    localStorage.setItem('counter', counter);
  }, [counter]);

  return (
    <div className={styles.BG}>
      <div className={styles.plate}>
        <counter className={styles.counter}>{counter}</counter>
      </div>
      <button onClick={() => setCounter(counter + 1)} className={styles.monsterButton}></button>
    </div>
  );
}