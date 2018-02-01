import {combineReducers} from 'redux'

import home from './Home';
import list from './list';

let reducers = combineReducers({
  home, list
});
export default reducers;