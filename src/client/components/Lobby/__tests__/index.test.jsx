// @flow

import { shallow } from 'enzyme'
import React from 'react'

import Lobby from '..'

describe('<Lobby />', () => {
  const lobbyService = {
    fetchUsers () {
      return Promise.resolve([])
    }
  }

  describe('rendering', () => {
    it('should render correctly', () => {
      const component = shallow(<Lobby lobbyService={lobbyService} />)
      expect(component.find('h2').text()).toBe('Lobby')
      expect(component.find('.notice').text()).toContain('https://forums.triplea-game.org/topic/4')
      expect(component.find('Users').length).toBe(1)
    })
  })

  describe('mounting', () => {
    describe('when service succeeds', () => {
      it('should display user list', async () => {
        const lobbyService = {
          fetchUsers () {
            return Promise.resolve([
              { name: 'user1' },
              { name: 'user2' },
              { name: 'user3' }
            ])
          }
        }
        const component = shallow(<Lobby lobbyService={lobbyService} />, { lifecycleExperimental: true })
        await until(() => {
          expect(component.state().users).toHaveLength(3)
          expect(component.state().usersError).toBeNull()
        })
      })
    })

    describe('when service fails', () => {
      it('should display error message', async () => {
        const lobbyService = {
          fetchUsers () {
            return Promise.reject(new Error())
          }
        }
        const component = shallow(<Lobby lobbyService={lobbyService} />, { lifecycleExperimental: true })
        await until(() => {
          expect(component.state().users).toHaveLength(0)
          expect(component.state().usersError).not.toBeNull()
        })
      })
    })
  })

  function until (condition: Function) {
    function _until (condition: Function, startTime: number, timeout: number, resolve: Function, reject: Function) {
      try {
        condition()
        resolve()
      } catch (e) {
        if ((new Date().getTime() - startTime) >= timeout) {
          reject(e)
        } else {
          setTimeout(() => _until(condition, startTime, timeout, resolve, reject), 30)
        }
      }
    }

    return new Promise((resolve, reject) => {
      return _until(condition, new Date().getTime(), 5000, resolve, reject)
    })
  }
})
