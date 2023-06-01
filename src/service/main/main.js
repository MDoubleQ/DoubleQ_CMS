import { localCache } from '@/utils/cache'
import DQRequest from '../request/index'

// 获取角色列表
export function getEntireRoles() {
  return DQRequest.post({
    url: '/role/list',
    headers: {
      Authorization: localCache.getCache('login-token')
    }
  })
}
// 获取部门列表
export function getEntireDepartment() {
  return DQRequest.post({
    url: '/department/list',
    headers: {
      Authorization: localCache.getCache('login-token')
    }
  })
}
