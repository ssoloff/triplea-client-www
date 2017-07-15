// @flow

import React from 'react'
import { shallow } from 'enzyme'

import App from '..'

describe('<App />', () => {
  describe('rendering', () => {
    it('should render correctly', () => {
      const component = shallow(<App />)
      expect(component.find('h1').text()).toBe('TripleA')
      expect(component.find('.subtitle').text()).toContain('Open Source')
    })
  })
})
