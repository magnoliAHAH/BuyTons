import { useState } from 'react'
import styles from './App.module.scss'
import { Details } from './Details'

const title = 'Hellooooo'



export function App() {

  {/*const [details, setDetails] = useState({
    title: 'Title',
    description: 'my description',
    buttonText: 'Click'
  })*/}

  return (
    <div>
      {/*<img src='/email.png' width={150}></img>}
      <Details details={details} setDetails={setDetails}/>*/}
      <header>
        <h1>Buy TON</h1>
        <button className={styles.standart_button}>Connect wallet</button>
      </header>
      <div className={styles.changer}>
        
        <div className={styles.payDescription}>
          <p >You pay</p>
          <input type="number" name="amount" placeholder="Enter..."/>
        </div>
        <div className={styles.payDescription}>
          <p >You got</p>
          <input type="number" name="amount" placeholder="Enter..."/>
        </div>

        <button className={styles.standart_button}>Pay</button>
      </div>
    </div>
  )
}