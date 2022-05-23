import React, {useCallback} from 'react';
import {Button} from '../Button/Button';
import {Scoreboard} from '../Scoreboard/Scoreboard';
import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setCountAC} from '../../redux/counter-reducer';
import {StateType} from '../../redux/store';

type CounterType = {}

export const Counter: React.FC<CounterType> = React.memo(() => {

    const dispatch = useDispatch();
    const error = useSelector<StateType, string>(state => state.counter.messages.errorMessage);
    const textMessage = useSelector<StateType, string>(state => state.counter.messages.initialMessage);
    const currentCount = useSelector<StateType, number>(state => state.counter.mainCounts.currentCount);
    const startCount = useSelector<StateType, number>(state => state.counter.mainCounts.startCount);
    const maxCount = useSelector<StateType, number>(state => state.counter.mainCounts.maxCount);

    const increaseCount = useCallback(() => {
        dispatch(setCountAC(currentCount + 1))
    }, [currentCount, dispatch]);

    const resetCount = useCallback(() => {
        dispatch(setCountAC(startCount))
    }, [startCount, dispatch]);

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

