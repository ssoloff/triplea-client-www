import PropTypes from 'prop-types'
import React from 'react'

export default function User (props) {
  return (
    <li className='list-group-item'>{props.name}</li>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired
}
