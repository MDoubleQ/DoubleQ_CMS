import DQRequest from '../../request/index.js'
import { localCache } from '@/utils/cache.js'

// 获取用户列表
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

// 新建用户
export function createNewUserData(userInfo) {
  return DQRequest.post({
    url: '/users',
    data: userInfo,
    headers: {
      Authorization: localCache.getCache('login-token')
    }
  })
}

// 编辑用户
export function editUserData(id, userInfo) {
  return DQRequest.patch({
    url: `/users/${id}`,
    data: userInfo,
    headers: {
      Authorization: localCache.getCache('login-token')
    }
  })
}
