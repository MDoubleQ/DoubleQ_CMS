import DQRequest from '../request/index'
import { localCache } from '@/utils/cache'
export function accountLoginRequest(account) {
  return DQRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id) {
  return DQRequest.get({
    url: `/users/${id}`,
    headers: {
      Authorization: localCache.getCache('login-token')
    }
  })
}

export function getUserMenuByRoleId(id) {
  return DQRequest.get({
    url: `/role/${id}/menu`,
    headers: {
      Authorization: localCache.getCache('login-token')
    }
  })
}
