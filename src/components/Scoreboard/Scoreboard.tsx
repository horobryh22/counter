import React from 'react';
import classes from '../Counter/Counter.module.css';

type ScoreboardType = {
    count: number
    error: string | null
    maxCount: number
}

export const Scoreboard: React.FC<ScoreboardType> = ({count, maxCount, error}) => {

    const countClassName = count >= maxCount || error ? classes.countingStop : classes.counting;
    const scoreboardClassName = count >= maxCount || error ? classes.scoreboardReject : classes.scoreboard;

    return (
        <div className={scoreboardClassName}>
            {error ? <div className={countClassName}>{error}</div> : <div className={countClassName}>{count}</div>}
        </div>
    );
};
