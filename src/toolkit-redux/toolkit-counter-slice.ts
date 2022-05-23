import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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

export const counterSlice = createSlice({
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
    }
});

export default counterSlice.reducer;
export const {setTextMessage, setCount, setMaxCount, setStartCount, setError} = counterSlice.actions;
