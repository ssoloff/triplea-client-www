// @flow

import { Link } from 'react-router-dom'
import React from 'react'

import Users from '../lobby/Users'
import lobbyService from '../../services/lobby'

import styles from './index.css'

export default class Lobby extends React.Component {
  state = {
    users: []
  }

  componentDidMount () {
    lobbyService.fetchUsers()
      .then(users => this.setState({ users }))
  }

  render () {
    return (
      <div className='container'>
        <h2>Lobby</h2>
        <div className='row'>
          <div className='col-sm-9'>
            <p className={styles.notice}>
              Lobby Rules: https://forums.triplea-game.org/topic/4<br/>
              No talking politics in the lobby! Take your political comments to a private game!<br/>
              Please ensure you are using the latest stable release of Triplea located here http://www.triplea-game.org/
            </p>
            <p>Return to <Link to='/'>main menu</Link></p>
          </div>
          <div className='col-sm-3'>
            <Users users={this.state.users} />
          </div>
        </div>
      </div>
    )
  }
}
