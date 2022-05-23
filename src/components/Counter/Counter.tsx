import React, {useCallback} from 'react';
import {Button} from '../Button/Button';
import {Scoreboard} from '../Scoreboard/Scoreboard';
import classes from './Counter.module.css';
import {useTypedDispatch, useTypedSelector} from '../../toolkit-redux/toolkit-store';
import {setCount} from '../../toolkit-redux/toolkit-counter-slice';

export const Counter: React.FC = React.memo(() => {

    const dispatch = useTypedDispatch();
    const {errorMessage: error, initialMessage: textMessage} = useTypedSelector(state => state.counter.messages);
    const {currentCount, maxCount, startCount} = useTypedSelector(state => state.counter.mainCounts);

    const increaseCount = useCallback(() => {
        dispatch(setCount(currentCount + 1))
    }, [currentCount, dispatch, setCount]);

    const resetCount = useCallback(() => {
        dispatch(setCount(startCount))
    }, [dispatch, setCount, startCount]);

    return (
        <div className={classes.wrapperScoreboard}>
            <Scoreboard/>
            <div>
                <Button
                    callback={increaseCount}
                    name={'inc'}
                    disabled={currentCount >= maxCount || error !== '' || textMessage !== ''}
                />
                <Button
                    callback={resetCount}
                    name={'reset'}
                    disabled={error !== '' || textMessage !== '' || currentCount === startCount}
                />
            </div>
        </div>
    );
});

