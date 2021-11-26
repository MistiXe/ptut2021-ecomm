import React from "react";


function Formulaire(props) {
    function check() {
        let rep = document.forms["form"]["rep"].value
        if (rep === 3) {
            props.suivante()
        } else {
            props.erreur()
        }
    }

    return (
        <center>
            <div className="formu">
                <form name="form">
                    reponse : <input type="text" name="rep" onKeyPress={e => {
                    if (e.key === 'Enter') e.preventDefault();
                }}/>
                    <btn onClick={check}>Enter</btn>

                </form>
            </div>
        </center>
    )

}
export default Formulaire;