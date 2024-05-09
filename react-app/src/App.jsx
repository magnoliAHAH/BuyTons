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
  const [counter, setCounter] = useState(0);

  return (
    <TonConnectUIProvider manifestUrl="https://mixail.ermin33.fvds.ru/tonconnect-manifest.json">


      <div className={styles.BG}>

        {/* Кнопка подключения */}
        <div className={styles.connectButton}>
          <TonConnectButton/>
        </div>

        {/* Счётчик монет */}
        <div className={styles.plate}>
          <counter className={styles.counter}>{counter}</counter>
        </div>

        {/* Кнопка для клика */}
        <button onClick={() => setCounter(counter + 1)} className={styles.monsterButton}></button>

        {/* Нижняя панель кнопок*/}
        <div style={{display: 'inline-block'}}>

          {MENU.map(
            item => 
            <button href={item.link} style={{display: 'inline-grid'}}>
              <img src={item.img} style={{width: 70}}></img>
              {item.name}
            </button>
          )}

        </div>        
      </div>
    </TonConnectUIProvider>
  );
}