// @flow

import Lobby from '..'
import React from 'react'
import { shallow } from 'enzyme'

describe('<Lobby />', () => {
  describe('rendering', () => {
    it('should render correctly', () => {
      const component = shallow(<Lobby />)
      expect(component.find('h2').text()).toBe('Lobby')
      expect(component.find('.notice').text()).toContain('https://forums.triplea-game.org/topic/4')
    })
  })
})
