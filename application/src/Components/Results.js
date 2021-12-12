import Time from "./Time";
import Score from "./CalculScore";

import "../App2.scss";
import React, {useState} from "react";
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai"
import emailjs from "emailjs-com"

function Results(props) {
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
                        <td><Score dl={props.jrestant}
                                   time={props.seconds}/><br/></td>

                    </tr>
                    </tbody>
                </table>


            </div>

            <button id="Play3" onClick={props.return}> Menu</button>
        </>);

}
function Results2(props) {
    const [name, setName] = useState("");
    const [nbmail, setNbMail] = useState(1);

    const handleName = (event) => {
        setName(event.target.value)
    }
    function sendEmail(){

    }

    let mailC
    if (nbmail === 1) {
        mailC = (<>
                <div>Email 1: <input onChange={handleName} placeholder="Enter Email1"/></div>
                <AiFillPlusCircle onClick={() => setNbMail(2)}/>
            </>
        );
    } else {
        mailC = (<>
                <div>Email 1: <input onChange={handleName} placeholder="Enter Email1"/></div>
                <div>Email 2: <input onChange={handleName} placeholder="Enter Email2"/></div>
                <AiFillMinusCircle onClick={() => setNbMail(1)}/>
            </>
        );
    }


    return (<div>Victory <br/><br/> Time :<Time seconds={props.seconds}/>Days Left: {props.jrestant}<Score
        dl={props.jrestant}
        time={props.seconds}/><br/>

        <div>Send your results:<br/>Name: <input onChange={(event) => {setName(event.target.value)}} placeholder="Enter Name"/></div>
        {mailC}
        <bouton onClick={sendEmail}>Send Results !</bouton>
        <br/>
        <btn onClick={props.return}>Return
        </btn>
    </div>);
}

export default Results;
