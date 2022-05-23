import {StateType} from '../redux/store';
import {DispatchType} from './toolkit-store';
import {setCount, setMaxCount, setStartCount} from './toolkit-counter-slice';

export const getValuesToLocalStoreTC = () => (dispatch: DispatchType): void => {

    const maxCount = localStorage.getItem('maxCount');
    const startCount = localStorage.getItem('startCount');

    if (maxCount) {
        const value = JSON.parse(maxCount);
        dispatch(setMaxCount(value));
    }

    if (startCount) {
        const value = JSON.parse(startCount);
        dispatch(setStartCount(value));
        dispatch(setCount(value));
    }
}
export const setValuesToLocalStoreTC = () => (dispatch: DispatchType, getState: () => StateType): void => {

    const maxCount = getState().counter.mainCounts.maxCount;
    const startCount = getState().counter.mainCounts.startCount;

    localStorage.setItem('startCount', JSON.stringify(startCount));
    localStorage.setItem('maxCount', JSON.stringify(maxCount));
    dispatch(setMaxCount(maxCount));
    dispatch(setStartCount(startCount));
}