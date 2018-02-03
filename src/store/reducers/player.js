import * as Types from '../action-types'
let initState = {
  detailLists: {},
  lyricLists: {},
  musicUrl: {}
};
function player(state = initState, action) {
  switch (action.type) {
    case Types.GET_SONG_DETAIL:
      return {...state, detailLists: action.payload};
    case Types.GET_LYRIC:
      return {...state, lyricLists: action.payload};
    case Types.GET_MUSIC_URL:
      return {...state, musicUrl: action.payload}
  }
  return state;
}
export default player;