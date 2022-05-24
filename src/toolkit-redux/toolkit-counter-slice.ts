import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getValuesFromLocalStorage, setValuesToLocalStorage} from './toolkit-thunk-creators';

export type MessagesType = {
    initialMessage: string
    errorMessage: string
}
export type MainCountsType = {
    startCount: number
    maxCount: number
    currentCount: number
}
export type InitialStateType = typeof initialState;

const initialState = {
    messages: {
        initialMessage: 'Set values and enter "set"',
        errorMessage: ''
    } as MessagesType,
    mainCounts: {
        startCount: 0,
        maxCount: 1,
        currentCount: 0
    } as MainCountsType
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setTextMessage(state: InitialStateType, action: PayloadAction<string>) {
            state.messages.initialMessage = action.payload;
        },
        setStartCount(state: InitialStateType, action: PayloadAction<number>) {
            state.mainCounts.startCount = action.payload;
        },
        setMaxCount(state: InitialStateType, action: PayloadAction<number>) {
            state.mainCounts.maxCount = action.payload;
        },
        setCount(state: InitialStateType, action: PayloadAction<number>) {
            state.mainCounts.currentCount = action.payload;
        },
        setError(state: InitialStateType, action: PayloadAction<string>) {
            state.messages.errorMessage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getValuesFromLocalStorage.fulfilled, (state, {payload: {startCount, maxCount}}) => {
                state.mainCounts.startCount = Number(startCount);
                state.mainCounts.maxCount = Number(maxCount);
                console.log('getting data from Local Storage finished with success');
            })
            .addCase(getValuesFromLocalStorage.pending, () => {
                console.log('running get values from Local Storage');
            })
            .addCase(getValuesFromLocalStorage.rejected, (state, {payload}) => {
                state.mainCounts.startCount = 0;
                state.mainCounts.maxCount = 10;
                state.messages.initialMessage = payload || ' ';
            })
            .addCase(setValuesToLocalStorage.fulfilled, () => {
                console.log('setting data from Local Storage finished with success');
            })
            .addCase(setValuesToLocalStorage.pending, () => {
                console.log('setting data from Local Storage');
            })
            .addCase(setValuesToLocalStorage.rejected, () => {
                console.log('setting data from Local Storage finished with error');
            })
    }
});

export default counterSlice.reducer;
export const {setTextMessage, setCount, setMaxCount, setStartCount, setError} = counterSlice.actions;

