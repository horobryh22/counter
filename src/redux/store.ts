import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';

export type StateType = ReturnType<typeof rootReducer>;
type StoreType = typeof store;

const rootReducer = combineReducers({
    counter: counterReducer
});

export const store = createStore(rootReducer);