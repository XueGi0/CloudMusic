import * as Types from '../action-types';
import {getSongList, getExclusive, getNewestMv} from '../../api/Home';
import {getPlayList, getListDetail} from '../../api/list'

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
  }
};
export default actions;