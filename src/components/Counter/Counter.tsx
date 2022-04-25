import React from 'react';
import {Button} from '../Button/Button';
import {Scoreboard} from '../Scoreboard/Scoreboard';
import classes from './Counter.module.css';

type CounterType = {
    count: number
    error: string | null
    maxCount: number
    startCount: number
    setCount: (count: number) => void
}

export const Counter: React.FC<CounterType> = ({count, setCount, maxCount, error, startCount}) => {

    const increaseCount = () => {
        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(startCount);
    }

    return (
        <div className={classes.wrapperScoreboard}>
            <Scoreboard count={count} maxCount={maxCount} error={error}/>
            <div>
                <Button callback={() => increaseCount()} name={'inc'} disabled={count >= maxCount || error !== null}/>
                <Button callback={() => resetCount()} name={'reset'} disabled={count === startCount}/>
            </div>
        </div>
    );
};

