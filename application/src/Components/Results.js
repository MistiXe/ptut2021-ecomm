import Time from "./Time";
import Score from "./CalculScore";
import React from "react";

function Results(props){
    return(<div>Victory <br/> Time :<Time seconds={props.seconds}/><br/>Days Left: {props.jrestant}<Score dl={props.jrestant}
                                                                                                   time={props.seconds}/><br/>
        <btn onClick={props.return}>Return
        </btn>
    </div>);
}

export default Results;
