import axios from 'axios'
// https://m.maizuo.com/gateway?k=788167
export const City = () => {
  return axios({
    url: '/city/gateway',
    method: 'GET',
    params: {
      k: 788167
    },
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605174562101026220736513"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
}
