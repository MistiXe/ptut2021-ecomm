import React, {useState} from "react";
import GenerateDoc from "./data/GenerateDoc";




function Formulaire(props) {
    const [pageFormu, setPageFormu] = useState(0);//Faut utiliser ça pour changer de morceaux de formulaire
    if (props.etape === 2) {



        return (
            <>

                <h3>Formulaire de l'étape 1</h3>
                <div>
                <select name="pets" id="pet-select">
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>
                </div>
                <div className="cards2">
                    <p className="info2">It appears here !</p>
                </div>
                <button id="next2" onClick={pageFormu}> Complete the Document </button>
            </>
        );

    } else if (props.etape === 4) {
        //email exercice
        return (
            <div><img  className="divForm1" src={GenerateDoc.tabCI[0].img}/></div>

        );

    } else if (props.etape === 5) {
        //Application for issuing Letter of Credit (document super long et donc differents des autres)
        return (
            <div><img  className="divForm1" src={GenerateDoc.tabAFS[0].img}/></div>

        );

    } else {
        //Les autres documents qu'on peut normalement traiter de la même manière
        return (
            <div onClick={props.suivante}>Next</div>
        );

    }


}
export default Formulaire;