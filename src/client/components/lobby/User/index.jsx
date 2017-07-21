// @flow

import React from 'react'

import type { UserProps } from './types'

export default function User (props: UserProps) {
  return (
    <li className='list-group-item'>{props.name}</li>
  )
}
