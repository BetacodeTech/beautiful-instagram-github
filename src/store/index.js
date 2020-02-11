import { combineReducers } from 'redux';
import {github} from "./github.duck";
import { createStore} from 'redux';

const rootReducer = combineReducers({
    github
});

const store = createStore(rootReducer);

export default store;



