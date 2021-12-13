import Time from "./Time";

import React, {useRef, useState} from "react";
import emailjs from "emailjs-com"

function Results(props) {

    const form = useRef();
    const [ok, setOk] = useState(null);

    let score = (1000 * props.jrestant) / props.seconds;
    score = Math.trunc(score);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0ynaks1', 'template_mk1s5hw', form.current, 'user_e4XlCrdarKUld7xK3LUaD')
            .then(() => {
                setOk("The Email was sent successfully")
            }, () => {
                setOk("Error, the Email could not be sent")
            });
    };

    return (<div>Victory <br/><br/> Time :<Time seconds={props.seconds}/>Days Left: {props.jrestant}
            <div>Score : {score}</div>
            <br/>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name"/>
                <label>Email</label>
                <input type="email" name="user_email"/>
                <input name="score" value={score} type="hidden"/>
                <input type="submit" value="Send"/>
            </form>
            {ok === null ? <div/> : <div>{ok}</div>}


        </div>
    )
}


export default Results;
