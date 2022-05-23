import {StateType} from './store';

export type MessagesType = {
    initialMessage: string
    errorMessage: string
}
export type MainCountsType = {
    startCount: number
    maxCount: number
    currentCount: number
}

export type ActionsType = ReturnType<typeof setTextMessageAC>
    | ReturnType<typeof setStartCountAC>
    | ReturnType<typeof setMaxCountAC>
    | ReturnType<typeof setCountAC>
    | ReturnType<typeof setErrorAC>;

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

export type InitialStateType = typeof initialState;

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SET-TEXT-MESSAGE':
            return {...state, messages: {...state.messages, initialMessage: action.payload.message}}
        case 'SET-START-COUNT':
            return {...state, mainCounts: {...state.mainCounts, startCount: action.payload.value}}
        case 'SET-MAX-COUNT':
            return {...state, mainCounts: {...state.mainCounts, maxCount: action.payload.value}}
        case 'SET-COUNT':
            return {...state, mainCounts: {...state.mainCounts, currentCount: action.payload.value}}
        case 'SET-ERROR':
            return {...state, messages: {...state.messages, errorMessage: action.payload.error}}
        default:
            return state;
    }
}

export const setTextMessageAC = (message: string) => {
    return {
        type: 'SET-TEXT-MESSAGE',
        payload: {
            message
        }
    } as const
};
export const setStartCountAC = (value:number) => {
    return {
        type: 'SET-START-COUNT',
        payload: {
            value
        }
    } as const
};
export const setMaxCountAC = (value:number) => {
    return {
        type: 'SET-MAX-COUNT',
        payload: {
            value
        }
    } as const
};
export const setCountAC = (value: number) => {
    return {
        type: 'SET-COUNT',
        payload: {
            value
        }
    } as const
};
export const setErrorAC = (error: string) => {
    return {
        type: 'SET-ERROR',
        payload: {
            error
        }
    } as const
};

// export const getValuesToLocalStoreTC = () => (dispatch: (action: ActionsType) => void) => {
//
//     const maxCount = localStorage.getItem('maxCount');
//     const startCount = localStorage.getItem('startCount');
//
//     if (maxCount) {
//         const value = JSON.parse(maxCount);
//         dispatch(setMaxCountAC(value));
//     }
//
//     if (startCount) {
//         const value = JSON.parse(startCount);
//         dispatch(setStartCountAC(value));
//         dispatch(setCountAC(value));
//     }
// }
// export const setValuesToLocalStoreTC = () => (dispatch: (action: ActionsType) => void, getState: () => StateType): void => {
//
//     const maxCount = getState().counter.mainCounts.maxCount;
//     const startCount = getState().counter.mainCounts.startCount;
//
//     localStorage.setItem('startCount', JSON.stringify(startCount));
//     localStorage.setItem('maxCount', JSON.stringify(maxCount));
//     dispatch(setMaxCountAC(maxCount));
//     dispatch(setStartCountAC(startCount));
// }
//
