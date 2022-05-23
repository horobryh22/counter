import React from 'react';
import classes from './Scoreboard.module.css';
import {useSelector} from 'react-redux';
import {StateType} from '../../redux/store';

type ScoreboardType = {}

export const Scoreboard: React.FC<ScoreboardType> = React.memo(() => {

    const error = useSelector<StateType, string>(state => state.counter.messages.errorMessage);
    const maxCount = useSelector<StateType, number>(state => state.counter.mainCounts.maxCount);
    const textMessage = useSelector<StateType, string>(state => state.counter.messages.initialMessage);
    const currentCount = useSelector<StateType, number>(state => state.counter.mainCounts.currentCount);

    const countClassName = currentCount >= maxCount || error ? classes.countingStop : classes.counting;
    const scoreboardClassName = currentCount >= maxCount || error ? classes.scoreboardReject : classes.scoreboard;
    const condition = textMessage ? textMessage : currentCount;

    return (
        <div className={scoreboardClassName}>
            {error ? <div className={countClassName}>{error}</div> : <div className={countClassName}>{condition}</div>}
        </div>
    );
});
