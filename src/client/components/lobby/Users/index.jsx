// @flow

import React from 'react'

import User from '../User'

import type { UsersProps } from './types'

export default function Users (props: UsersProps) {
  return (
    <ul className='list-group'>
      {
        props.users.map((user, index) => <User key={index} name={user.name} />)
      }
    </ul>
  )
}
