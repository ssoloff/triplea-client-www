import { Link } from 'react-router-dom'
import React from 'react'
import styles from './Lobby.css'

export default class Lobby extends React.Component {
  render () {
    return (
      <div>
        <h2>Lobby</h2>
        <p className={styles.notice}>
          Lobby Rules: https://forums.triplea-game.org/topic/4<br/>
          No talking politics in the lobby! Take your political comments to a private game!<br/>
          Please ensure you are using the latest stable release of Triplea located here http://www.triplea-game.org/
        </p>
        <p>Return to <Link to='/'>main menu</Link></p>
      </div>
    )
  }
}
