import React from 'react';
import {Button} from '../Button/Button';
import {Scoreboard} from '../Scoreboard/Scoreboard';

type CounterType = {
    count: number
    setCount: (count: number) => void
}

export const Counter: React.FC<CounterType> = ({count, setCount}) => {

    const increaseCount = () => {
        setCount(++count);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div>
            <Scoreboard count={count}/>
            <Button callback={() => increaseCount()} name={'inc'} disabled = {count > 4}/>
            <Button callback={() => resetCount()} name={'reset'}/>
        </div>
    );
};

