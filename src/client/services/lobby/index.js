// @flow

import type { $Users } from '../../components/lobby/Users/types'

export default {
  fetchUsers (): Promise<$Users> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { name: 'user1' },
          { name: 'user2' },
          { name: 'user3' }
        ])
      }, 5000)
    })
  }
}
