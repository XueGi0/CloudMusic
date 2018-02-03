import {combineReducers} from 'redux'

import home from './Home';
import list from './list';
import session from './session';
import player from './player';

let reducers = combineReducers({
  home, list, session, player
});
export default reducers;