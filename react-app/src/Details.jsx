import styles from './App.module.scss'

export function Details ({details, setDetails}) {
    return (
        <>
            <h1>{details.title}</h1>
            <div>{details.description}</div>
            <button className= {styles.standart_button} onClick={() => setDetails(prev => {
                return {
                    ...prev,
                    title: prev.title + '...',
                    buttonText: 'Clicked'
                }
            })}>{details.buttonText}</button>
            
        </>
    )
}