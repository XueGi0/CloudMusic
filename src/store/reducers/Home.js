import * as Types from '../action-types';

let initState = {
  songLists: [],
  exclusiveLists: [],
  newestLists: {},
  searchLists: {},
  privateFmLists: {},
};

function home(state = initState, actions) {
  switch (actions.type) {
    case Types.RECOMMEND_SONG_LIST:
      return {...state, songLists: actions.payload};
    case Types.EXCLUSIVE_BROADCAST:
      return {...state, exclusiveLists: actions.payload};
    case Types.NEWEST_MV:
      return {...state, newestLists: actions.payload};
    case Types.GET_SEARCH:
      return {...state, searchLists: actions.payload};
    case Types.GET_PRIVATE_FM:
      return {...state, privateFmLists: actions.payload}
  }
  return state;
}
export default home