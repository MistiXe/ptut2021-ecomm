import React, {useState} from "react";
import GenerateDoc from "./data/GenerateDoc";




function Formulaire(props) {
    const [pageFormu, setPageFormu] = useState(0);//Faut utiliser ça pour changer de morceaux de formulaire
    if(props.etape===2){
        //email exercice
        return (
            <>

            <h3>Formulaire de l'étape 1</h3>
                <div><img className="divForm1" src={GenerateDoc.tabCI[0].img}/> </div>

                </>
        );

    }
    else if(props.etape===4){
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


function Form1(props){
    return(
        <div> Rien est disponible pour l'instant</div>
    )
}
export default Formulaire;