import axios from './index';

export function toLogin(username,password) {
    return axios.get(`/login/cellphone?phone=${username}&password=${password}`)
}
export function getNumber() {
    return axios.get('/captcha')
}