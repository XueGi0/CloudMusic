import * as Types from '../action-types';
import {getPlayList,getListDetail} from '../../api/list'
let actions = {
  getPlayListAPI(id){
    return function (dispatch,getState) {
        // let {
        //     playList:{id}
        // } = getState().list;
        // id='32953014';
     dispatch({type:Types.GET_PLAYLIST,payload:getPlayList(id)});
    }
  },
  getListDetailAPI(id){
      return function (dispatch,getState) {
        dispatch({type:Types.GET_PLAYLISTDETAIL,payload:getListDetail(id)})
      }
  }
};
export default actions;