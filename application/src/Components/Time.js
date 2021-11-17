import React from "react";

function Time(props) {
    let h = Math.floor(props.seconds/3600);
    let m = Math.floor((props.seconds%3600)/60);
    let s = props.seconds%60;
    if(h!==0){
        return <div>{h}h {m}m {s}s</div>
    }else if(m!==0) {
        return <div>{m}m {s}s</div>
    }else {
        return <div>{s}s</div>
    }

}
export default Time;