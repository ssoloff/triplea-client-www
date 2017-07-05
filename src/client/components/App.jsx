import React from 'react'
import styles from './App.css'

export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>TripleA</h1>
        <p className={styles.subtitle}>The World&apos;s Foremost Open Source Grand Strategy Game</p>
      </div>
    )
  }
}
