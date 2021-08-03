import reducer from './reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    reducer: reducer
});

export default rootReducer;
