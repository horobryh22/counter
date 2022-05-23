import React from 'react';
import classes from './SettingsBoard.module.css'
import {Input} from './Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../../redux/store';
import {setMaxValueAC, setStartValueAC, ValuesType} from '../../../redux/counter-reducer';

export type SettingsBoardType = {}

export const SettingsBoard: React.FC<SettingsBoardType> = React.memo(({}) => {

    const dispatch = useDispatch();
    const error = useSelector<StateType, string>(state=>state.counter.messages.errorMessage);
    const values = useSelector<StateType, ValuesType>(state => state.counter.values);

    return (
        <div className={classes.settingsBoard}>
            <Input
                name={'Max Value:'}
                callback={(value) => dispatch(setMaxValueAC(value))}
                value={values.maxValue.toString()}
                error={error}
            />
            <Input
                name={'Start Value:'}
                callback={(value) => dispatch(setStartValueAC(value))}
                value={values.startValue.toString()}
                error={error}
            />
        </div>
    );
});
