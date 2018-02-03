import * as Types from '../action-types';
import {getPlayList, getListDetail, getHotdj, getHotList, getRencentHistory} from '../../api/list';
import {getSongList, getExclusive, getNewestMv, getSearch, getPrivateFM} from '../../api/Home';
import {toLogin} from "../../api/Login";


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
  getHotdjAPI(){
    return function (dispatch, getState) {
      dispatch({type: Types.GET_HOTDJ, payload: getHotdj()})
    }
  },
  getRecentHistoryAPI(id){
    return function (dispatch, getState) {
      dispatch({type: Types.GET_RENCENTHISTORY, payload: getRencentHistory(id)})
    }
  },
  getHotListAPI(){
    return function (dispatch, getState) {
      dispatch({type: Types.GET_HOTLIST, payload: getHotList()})
    }
  },
  toLoginAPI(username, password){
    return function (dispatch, getState) {
      toLogin(username, password).then(function (data) {
        dispatch({type: Types.SET_USER_INFO, user: data});
        if (data.err === 0) {
        }
        // setTimeout(()=>{
        //     history.push('/profile');//成功跳转到个人中心页面
        // },1000)
      })
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