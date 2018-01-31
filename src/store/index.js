import {createStore} from 'redux';

import reducer from './reducer/index';

let store = createStore(reducer);
window._store = store; //为了测试用
export default store;