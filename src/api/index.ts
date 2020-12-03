import http from '../server'

export function getList(){
    return http.get('rest/items')
}