// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import Users from '../lobby/Users'

import styles from './index.css'

import type { $Users } from '../../model/types'
import type { $LobbyService } from '../../services/lobby/types'

export default class Lobby extends React.Component {
  props: {
    lobbyService: $LobbyService
  }

  state: {
    users: $Users,
    usersError: ?Error
  } = {
    users: [],
    usersError: null
  }

  componentDidMount () {
    this.props.lobbyService.fetchUsers()
      .then(users => this.setState({ users, usersError: null }))
      .catch(err => this.setState({ users: [], usersError: err }))
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
            {
              this.state.usersError
                ? <div>Failed: {this.state.usersError.message}</div>
                : <Users users={this.state.users} />
            }
          </div>
        </div>
      </div>
    )
  }
}
