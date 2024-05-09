import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';


export function App() {
  const [counter, setCounter] = useState(0);

  return (
    <TonConnectUIProvider manifestUrl="https://mixail.ermin33.fvds.ru/tonconnect-manifest.json">
      <div className={styles.BG}>
        <div className={styles.plate}>
          <counter className={styles.counter}>{counter}</counter>
        </div>
        <button onClick={() => setCounter(counter + 1)} className={styles.monsterButton}></button>
        <TonConnectButton/>
      </div>
    </TonConnectUIProvider>
  );
}