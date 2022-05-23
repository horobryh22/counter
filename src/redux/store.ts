import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ActionsType, counterReducer} from './counter-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';

export type StateType = ReturnType<typeof rootReducer>;
type StoreType = typeof store;

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppActionType = ActionsType;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();


const rootReducer = combineReducers({
    counter: counterReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));