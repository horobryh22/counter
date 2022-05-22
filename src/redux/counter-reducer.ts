export type MessagesType = {
    initialMessage: string
    errorMessage: string
}
export type MainCountsType = {
    startCount: number
    maxCount: number
    currentCount: number
}
export type  ValuesType = {
    maxValue: number
    startValue: number
}

type ActionsType = ReturnType<typeof setTextMessageAC> | ReturnType<typeof setStartValueAC> | ReturnType<typeof setMaxValueAC>;

const initialState = {
    messages: {
        initialMessage: 'Set values and enter "set"',
        errorMessage: ''
    } as MessagesType,
    mainCounts: {
        startCount: 0,
        maxCount: 1,
        currentCount: 0
    } as MainCountsType,
    values: {
        maxValue: 2,
        startValue: 1
    } as ValuesType
}

export type InitialStateType = typeof initialState;

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SET-TEXT-MESSAGE':
            return {...state, messages: {...state.messages, initialMessage: action.payload.message}}
        case 'SET-START-VALUE':
            return {...state, values: {...state.values, startValue: action.payload.value}}
        case 'SET-MAX-VALUE':
            return {...state, values: {...state.values, maxValue: action.payload.value}}
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
}
export const setStartValueAC = (value: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: {
            value
        }
    } as const
}
export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {
            value
        }
    } as const
}