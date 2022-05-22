import React from 'react';
import classes from './Scoreboard.module.css';

type ScoreboardType = {
    count: number
    error: string | null
    maxCount: number
    textMessage: string | null
}

export const Scoreboard: React.FC<ScoreboardType> = React.memo(({count, maxCount, error, textMessage}) => {

    const countClassName = count >= maxCount || error ? classes.countingStop : classes.counting;
    const scoreboardClassName = count >= maxCount || error ? classes.scoreboardReject : classes.scoreboard;
    const condition = textMessage ? textMessage : count;

    return (
        <div className={scoreboardClassName}>
            {error ? <div className={countClassName}>{error}</div> : <div className={countClassName}>{condition}</div>}
        </div>
    );
});
