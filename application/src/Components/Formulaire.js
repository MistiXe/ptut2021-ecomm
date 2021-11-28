import React, {useState} from "react";
import GenerateDoc from "./data/GenerateDoc";



function Formulaire(props) {
    const [pageFormu, setPageFormu] = useState(0);//Faut utiliser ça pour changer de morceaux de formulaire
    if(props.etape===4){
        //email exercice
        return (
            <div onClick={props.suivante}>Next</div>
        );

    }
    else if(props.etape===5){
        //Application for issuing Letter of Credit (document super long et donc differents des autres)
        return (
            <div onClick={props.suivante}>Next</div>
        );

    }
    else {
        //Les autres documents qu'on peut normalement traiter de la même manière
        return (
            <div onClick={props.suivante}>Next</div>
        );

    }


}
export default Formulaire;