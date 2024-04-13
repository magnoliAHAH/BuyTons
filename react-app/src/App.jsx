import { useState, useEffect } from 'react';
import styles from './App.module.scss';

export function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.BG}>
      <div className={styles.plate}>
        <counter className={styles.counter}>{counter}</counter>
      </div>
      <button onClick={() => setCounter(counter + 1)} className={styles.monsterButton}></button>
    </div>
  );
}