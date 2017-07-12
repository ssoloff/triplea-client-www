// @flow

import App from '..'
import React from 'react'
import { shallow } from 'enzyme'

describe('<App />', () => {
  describe('rendering', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find('h1').text()).toBe('TripleA')
      expect(wrapper.find('.subtitle').text()).toContain('Open Source')
    })
  })
})
