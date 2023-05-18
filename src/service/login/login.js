import DQRequest from '../request/index'

export function accountLoginRequest(account) {
  return DQRequest.post({
    url: '/login',
    data: account
  })
}
