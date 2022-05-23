import React from 'react';
import classes from './SettingsBoard.module.css'
import {Input} from './Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../../redux/store';
import {setMaxCountAC, setStartCountAC} from '../../../redux/counter-reducer';

export type SettingsBoardType = {}

export const SettingsBoard: React.FC<SettingsBoardType> = React.memo(() => {

    const dispatch = useDispatch();
    const maxCount = useSelector<StateType, number>(state => state.counter.mainCounts.maxCount);
    const startCount = useSelector<StateType, number>(state => state.counter.mainCounts.startCount);
    const error = useSelector<StateType, string>(state=>state.counter.messages.errorMessage);

    return (
        <div className={classes.settingsBoard}>
            <Input
                name={'Max Value:'}
                callback={(value) => dispatch(setMaxCountAC(value))}
                value={maxCount.toString()}
                error={error}
            />
            <Input
                name={'Start Value:'}
                callback={(value) => dispatch(setStartCountAC(value))}
                value={startCount.toString()}
                error={error}
            />
        </div>
    );
});
