/**
 * auto combin reducers
 * Created by xg on 2018.
 */

import {combineReducers} from 'redux'
const reducersReq = require.context('./../container', true, /reducer\.js$/) || {};
const reducersMap = new Map();
const reducers = {};

reducersReq.keys().forEach(key=>{
    const reducer = reducersReq(key).default;
    const name = key.split('/')[key.split('/').length-2];
    reducersMap.set(name,reducer);

});
for(let [name,reducer] of reducersMap){
    reducers[name] = reducer;
}
export default combineReducers(reducers);