import React, {useCallback} from 'react';
import {Button} from '../Button/Button';
import {Scoreboard} from '../Scoreboard/Scoreboard';
import classes from './Counter.module.css';

type CounterType = {
    count: number
    error: string | null
    maxCount: number
    startCount: number
    textMessage: string | null
    setCount: (count: number) => void
}

export const Counter: React.FC<CounterType> = React.memo(({count, setCount, maxCount, error, startCount, textMessage}) => {

    const increaseCount = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const resetCount = useCallback(() => {
        setCount(startCount);
    }, [startCount]);

    return (
        <div className={classes.wrapperScoreboard}>
            <Scoreboard count={count} maxCount={maxCount} error={error} textMessage={textMessage}/>
            <div>
                <Button callback={increaseCount} name={'inc'} disabled={count >= maxCount || error !== null || textMessage !== ''}/>
                <Button callback={resetCount} name={'reset'} disabled={count === startCount}/>
            </div>
        </div>
    );
});

