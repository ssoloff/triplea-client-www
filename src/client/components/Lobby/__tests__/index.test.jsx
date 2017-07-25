// @flow

import React from 'react'
import { shallow } from 'enzyme'

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
})
