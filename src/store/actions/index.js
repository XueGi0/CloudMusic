import * as Types from '../action-types';
import {getPlayList, getListDetail} from '../../api/list';
import {getSongList, getExclusive, getNewestMv, getSearch, getPrivateFM} from '../../api/Home';
let actions = {
  getSongListAPI(){
    return function (dispatch, getState) {
      dispatch({type: Types.RECOMMEND_SONG_LIST, payload: getSongList()})
    }
  },
  getExclusiveAPI(){
    return function (dispatch, getState) {
      dispatch({type: Types.EXCLUSIVE_BROADCAST, payload: getExclusive()})
    }
  },
  getNewestMvAPI(){
    return function (dispatch, getState) {
      dispatch({type: Types.NEWEST_MV, payload: getNewestMv()})
    }
  },
  getPlayListAPI(id){
    return function (dispatch, getState) {
      dispatch({type: Types.GET_PLAYLIST, payload: getPlayList(id)});
    }
  },
  getListDetailAPI(id){
    return function (dispatch, getState) {
      dispatch({type: Types.GET_PLAYLISTDETAIL, payload: getListDetail(id)})
    }
  },
  getSearchAPI(keywords){
    return function (dispatch, getState) {
      dispatch({type: Types.GET_SEARCH, payload: getSearch(keywords)})
    }
  },
  getPrivateFmAPI(){
    return function (dispatch, getState) {
      dispatch({type: Types.GET_PRIVATE_FM, payload: getPrivateFM()})
    }
  }
};
export default actions;