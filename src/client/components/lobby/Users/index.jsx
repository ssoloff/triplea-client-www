import PropTypes from 'prop-types'
import React from 'react'

import User from '../User'

export default function Users (props) {
  return (
    <ul className='list-group'>
      {
        props.users.map((user, index) => <User key={index} name={user.name} />)
      }
    </ul>
  )
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
}
