import DQRequest from '../../request/index.js'
import { localCache } from '@/utils/cache.js'
export function postUsersListData() {
  return DQRequest.post({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10
    },
    headers: {
      Authorization: localCache.getCache('login-token')
    }
  })
}
