// @flow

import { mount, shallow } from 'enzyme'
import createSandbox from 'jest-sandbox'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Lobby from '..'

describe('<Lobby />', () => {
  const sandbox = createSandbox()

  afterEach(() => {
    sandbox.restore()
  })

  describe('rendering', () => {
    it('should render correctly', () => {
      const component = shallow(<Lobby />)
      expect(component.find('h2').text()).toBe('Lobby')
      expect(component.find('.notice').text()).toContain('https://forums.triplea-game.org/topic/4')
      expect(component.find('Users').length).toBe(1)
    })
  })

  describe('mounting', () => {
    it('should mount correctly', () => {
      sandbox.spyOn(Lobby.prototype, 'componentDidMount')
      mount(<Router><Lobby /></Router>)
      expect(Lobby.prototype.componentDidMount).toHaveBeenCalled()
    })
  })
})
