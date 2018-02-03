import axios from 'axios';

export function getSongDetail(id) {
  return axios.get(`/playlist/detail?id=${id}`)
}
export function getLyric(id) {
  return axios.get(`/lyric?id=${id}`)
}
export function getMusicUrl(id) {
  return axios.get(`/music/url?id=${id}`)
}