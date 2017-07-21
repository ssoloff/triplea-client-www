// @flow

import React from 'react'

import User from '../User'

import type { UserProps } from '../User/types'

type UsersProps = {
  users: UserProps[]
}

export default function Users (props: UsersProps) {
  return (
    <ul className='list-group'>
      {
        props.users.map((user, index) => <User key={index} name={user.name} />)
      }
    </ul>
  )
}
