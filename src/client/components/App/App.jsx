import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import Lobby from '../Lobby'
import React from 'react'
import styles from './App.css'

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <h1>TripleA</h1>
          <p className={styles.subtitle}>The World&apos;s Foremost Open Source Grand Strategy Game</p>

          <Route exact path='/' component={Home}/>
          <Route path='/lobby' component={Lobby}/>
        </div>
      </Router>
    )
  }
}
