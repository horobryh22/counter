import React from 'react';
import classes from './SettingsBoard.module.css'
import {Input} from './Input/Input';
import {useTypedDispatch, useTypedSelector} from '../../../toolkit-redux/toolkit-store';
import {setMaxCount, setStartCount} from '../../../toolkit-redux/toolkit-counter-slice';

export const SettingsBoard: React.FC = React.memo(() => {

    const dispatch = useTypedDispatch();
    const {maxCount, startCount} = useTypedSelector(state => state.counter.mainCounts);
    const {errorMessage: error} = useTypedSelector(state => state.counter.messages);

    return (
        <div className={classes.settingsBoard}>
            <Input
                name={'Max Value:'}
                callback={(value) => dispatch(setMaxCount(value))}
                value={maxCount}
                error={error}
            />
            <Input
                name={'Start Value:'}
                callback={(value) => dispatch(setStartCount(value))}
                value={startCount}
                error={error}
            />
        </div>
    );
});
