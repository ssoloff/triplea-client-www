// @flow

import type { $Users } from '../../model/types'

export type $LobbyService = {
  fetchUsers(): Promise<$Users>
}
