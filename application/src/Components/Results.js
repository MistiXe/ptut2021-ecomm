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
                alert("Email sent !");
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
                    <div>
                        <label className="nameSub">Name : </label>
                        <input className="namelabel" type="text" name="name"/>
                    </div>
                    <div>
                        <label className="nameSub">Email : </label>
                        <input className="namelabel" type="email" name="user_email"/>
                        <input name="score" value={score} type="hidden"/>
                    </div>
                    <input id="nextSub" type="submit" value="Send"/>

                </form>
                {ok === null ? <div/> : <h1>{ok}</h1>}

            </div>

            <button id="PlaySub" onClick={props.return}> Menu</button>
        </>);
}


export default Results;
