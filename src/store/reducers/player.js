import * as Types from '../action-types'
let initState = {
  detailLists: {}
};
function player(state = initState, action) {
  switch (action.type) {
    case Types.GET_SONG_DETAIL:
      return {...state, detailLists: action.payload};
  }
  return state;
}
export default player;