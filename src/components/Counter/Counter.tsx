import React from 'react';
import {Button} from '../Button/Button';
import {Scoreboard} from '../Scoreboard/Scoreboard';
import classes from './Counter.module.css';

type CounterType = {
    count: number
    setCount: (count: number) => void
    maxValue: number
    startValue: number
}

export const Counter: React.FC<CounterType> = ({count, setCount}) => {

    const increaseCount = () => {
        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className={classes.wrapperScoreboard}>
            <Scoreboard count={count}/>
            <div>
                <Button callback={() => increaseCount()} name={'inc'} disabled={count > 4}/>
                <Button callback={() => resetCount()} name={'reset'} disabled={count === 0}/>
            </div>
        </div>
    );
};

