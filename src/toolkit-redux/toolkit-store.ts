import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from './toolkit-counter-slice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootType = ReturnType<typeof rootReducer>;
export type DispatchType = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<DispatchType>();
export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector; // возвращаем типизированный Selector, чтобы не типизировать его вручную каждый раз