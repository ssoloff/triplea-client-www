// @flow

import React from 'react'
import { shallow } from 'enzyme'

import User from '..'

describe('<User />', () => {
  describe('rendering', () => {
    it('should render correctly', () => {
      const name = 'user name'
      const component = shallow(<User name={name} />)
      expect(component.find('.list-group-item').text()).toBe(name)
    })
  })
})
