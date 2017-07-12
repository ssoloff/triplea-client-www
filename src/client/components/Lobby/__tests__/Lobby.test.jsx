// @flow

import Lobby from '..'
import React from 'react'
import { shallow } from 'enzyme'

describe('<Lobby />', () => {
  describe('rendering', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Lobby />)
      expect(wrapper.find('h2').text()).toBe('Lobby')
      expect(wrapper.find('.notice').text()).toContain('https://forums.triplea-game.org/topic/4')
    })
  })
})
