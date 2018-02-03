import axios from './index';

export function toLogin(username,password) {
    return axios.get(`/login/cellphone?phone=${username}&password=${password}`)
}