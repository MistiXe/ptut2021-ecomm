import Time from "./Time";

import "../App2.scss";
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

    return (
        <>

            <h1 className="vict">Victory</h1>

            <div className="div_resultats">
                <table className="zigzag">
                    <thead>
                    <tr>
                        <th className="header">Time</th>
                        <th className="header">Day Left</th>
                        <th className="header">Score</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><Time seconds={props.seconds}/></td>
                        <td>{props.jrestant}</td>
                        <td>Score: {score}<br/></td>

                    </tr>
                    </tbody>
                </table>
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

            <button id="Play3" onClick={props.return}> Menu</button>
        </>);
}


export default Results;
