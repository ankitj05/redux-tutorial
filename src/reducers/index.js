import counter from './counter'
import isLogged from './isLogged'
import { combineReducers } from 'redux';

const reducers = combineReducers({
    counter,
    isLogged
})

export default reducers