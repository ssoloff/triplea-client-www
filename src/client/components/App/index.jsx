// @flow

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../Home'
import Lobby from '../Lobby'
import lobbyService from '../../services/lobby'

import styles from './index.css'

export default function App () {
  return (
    <Router>
      <div className='container'>
        <h1>TripleA</h1>
        <p className={styles.subtitle}>The World&apos;s Foremost Open Source Grand Strategy Game</p>

        <Route exact path='/' component={Home}/>
        <Route path='/lobby' render={() => <Lobby lobbyService={lobbyService} />}/>
      </div>
    </Router>
  )
}
