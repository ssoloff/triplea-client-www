// @flow

import Home from '..'
import React from 'react'
import { shallow } from 'enzyme'

describe('<Home />', () => {
  describe('rendering', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Home />)
      expect(wrapper.find('h2').text()).toBe('Main Menu')
      expect(wrapper.find('.notice').text()).toContain('http://www.triplea-game.org/help/')
    })
  })
})
