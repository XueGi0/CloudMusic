import * as Types from '../action-types';
let initState={
    user:null,
    msg:'',
    success:'',
    err:0,
    number:null
};
function session(state=initState,action) {
    switch (action.type){
        case Types.SET_USER_INFO:
            return {...action.user}; //用获取的数据放到redux中
        case Types.GET_NUMBER:
            return {...state,number:action.payload};
    }
    return state;
}
export default session;