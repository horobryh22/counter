import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from './toolkit-store';

export type ResponseType = {
    maxCount: string
    startCount: string
}

export const getValuesFromLocalStorage = createAsyncThunk<ResponseType, undefined, {rejectValue: string}>(
    'counter/getValuesFromLocalStorage',
    async (_, {rejectWithValue}) => {

        const maxCount = localStorage.getItem('maxCount');
        const startCount = localStorage.getItem('startCount');

        if (maxCount && startCount) {
            return {maxCount, startCount};
        } else {
            return rejectWithValue('Не удалось получить данные из Local Storage');
        }
    }
);

export const setValuesToLocalStorage = createAsyncThunk(
    'counter/setValuesToLocalStorage',
    async (_, {getState}) => {

        const state = getState() as RootState;
        const maxCount = state.counter.mainCounts.maxCount;
        const startCount = state.counter.mainCounts.startCount;

        localStorage.setItem('startCount', JSON.stringify(startCount));
        localStorage.setItem('maxCount', JSON.stringify(maxCount));
    }
);
