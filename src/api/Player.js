import axios from 'axios';

export function getSongDetail(id) {
  return axios.get(`/playlist/detail?id=${id}`)
}