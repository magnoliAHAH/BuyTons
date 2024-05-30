import { useState, useEffect } from 'react';
import styles from './App.module.scss';

import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';

const MENU = [
  {
    name: 'Quests',
    link: 'https://mixail.ermin33.fvds.ru/quests',
    img: 'https://mixail.ermin33.fvds.ru/quests.png',
    sizik: 20
  },
  {
    name: 'Stake',
    link: 'https://mixail.ermin33.fvds.ru/stake',
    img: 'https://mixail.ermin33.fvds.ru/stake.png',
    sizik: 20
  },
  {
    name: 'Frends',
    link: 'https://mixail.ermin33.fvds.ru/frends',
    img: 'https://mixail.ermin33.fvds.ru/frends.png',
    sizik: 20
  },
  {
    name: 'Rewards',
    link: 'https://mixail.ermin33.fvds.ru/rewards',
    img: 'https://mixail.ermin33.fvds.ru/rewards.png',
    sizik: 20
  }
]


export function App() {
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")));
  localStorage.setItem("counter", JSON.stringify(counter))

  return (
    <TonConnectUIProvider manifestUrl="https://mixail.ermin33.fvds.ru/tonconnect-manifest.json">

        {/* Кнопка подключения */}
        <div className={styles.connectButton}>
          <TonConnectButton/>
        </div>

        {/* Счётчик */}
        <div className={styles.plate}>
          <counter className={styles.counter}>{counter}</counter>
        </div>

        {/* Клик кнопка */}
        <div className={styles.clickArea}>
          <button onClick={() => setCounter(counter + 1)} className={styles.coinButton}></button>
        </div>

        {/* Навигация */}
        <div className={styles.navBar}>
          {MENU.map(
              item => 
              <button href={item.link} style={{display: 'inline-grid', width: "25%", backgroundColor: 'white', opacity: '0.8', color: 'black'}}>
                <img src={item.img} style={{width: '90%'}}></img>
                {item.name}
              </button>
            )}
        </div>

    </TonConnectUIProvider>
  );
}