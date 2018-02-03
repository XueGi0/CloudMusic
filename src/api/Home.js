import axios from './index';

//->获取推荐歌单
export function getSongList() {
  return axios.get('/personalized')
}

//->获取独家放送
export function getExclusive() {
  return axios.get('/personalized/privatecontent');
}

//->获取最新mv
export function getNewestMv() {
  return axios.get('/personalized/mv');
}
//->搜索
export function getSearch(keywords) {
  return axios.get(`/search/${keywords}`)
}
//->私人FM
export function getPrivateFM() {
  return axios.get('/personal_fm')
}