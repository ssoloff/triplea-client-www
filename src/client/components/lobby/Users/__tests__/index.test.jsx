// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Users from '..'

describe('<Users />', () => {
  describe('rendering', () => {
    it('should render correctly', () => {
      const component = shallow(<Users users={[
        { name: 'user1' },
        { name: 'user2' },
        { name: 'user3' }
      ]} />)
      expect(component.find('.list-group User').length).toBe(3)
    })
  })
})
