import { Link } from 'react-router-dom'
import React from 'react'

import styles from './index.css'

export default function Home () {
  return (
    <div>
      <h2>Main Menu</h2>
      <p className={styles.notice}>Welcome to TripleA 1.9 - For help: <a href='http://www.triplea-game.org/help/'>http://www.triplea-game.org/help/</a></p>
      <p><Link to='/lobby'>Lobby</Link></p>
    </div>
  )
}
