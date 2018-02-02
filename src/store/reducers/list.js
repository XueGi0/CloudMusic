// 一个页面一个reducer
import * as Types from '../action-types'
let initState = {
  playList: []
};
function list(state = initState, action) {
  switch (action.type) {
    case Types.GET_PLAYLIST:
      return {...state, lists: action.payload};
    case Types.GET_PLAYLISTDETAIL:
      return {...state, listDetail: action.payload};
    case Types.GET_HOTDJ:
        return {...state,hotDj:action.payload};
      case Types.GET_HOTLIST:
        return {...state,hotList:action.payload};
  }
  return state;
}
export default list;