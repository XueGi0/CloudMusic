import axios from './index';
// 每个接口返回的都是promise

// 获取用户歌单 uid
export function getPlayList(uid) {
  return axios.get(`/user/playlist?uid=${uid}`);
}
//获取歌单详情
export function getListDetail(id) {
  return axios.get(`/playlist/detail?id=${id}`)
}
//获取推荐电台
export function getHotdj() {
    return axios.get('/program/recommend')
}
//获取网友精选碟
export function getHotList() {
    return axios.get('/top/playlist?limit=6&order=new')
}