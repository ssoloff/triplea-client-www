// @flow

import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import { mount, shallow } from 'enzyme'

import Lobby from '..'

describe('<Lobby />', () => {
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
      jest.spyOn(Lobby.prototype, 'componentDidMount')
      mount(<Router><Lobby /></Router>)
      expect(Lobby.prototype.componentDidMount).toHaveBeenCalled()
    })
  })
})
