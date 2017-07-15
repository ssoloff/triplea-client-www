// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Home from '..'

describe('<Home />', () => {
  describe('rendering', () => {
    it('should render correctly', () => {
      const component = shallow(<Home />)
      expect(component.find('h2').text()).toBe('Main Menu')
      expect(component.find('.notice').text()).toContain('http://www.triplea-game.org/help/')
    })
  })
})
