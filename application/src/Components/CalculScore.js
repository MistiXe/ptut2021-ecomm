import React from "react";

function Score(props) {
    let score = (1000*props.dl)/props.time;
    score = Math.trunc(score);
    return (
        <div>Score : {score}</div>
    );
}

export default Score;