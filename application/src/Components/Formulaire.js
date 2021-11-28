import React, {useState} from "react";
import GenerateDoc from "./data/GenerateDoc";



function Formulaire(props) {

    let formuInst;
    if(props.etape === 2){

        formuInst = ( <>
                <body className="bodyForm">
            <div className="box">
                <div className="container">
                    <div className="form">
                        <h1>Commercial invoice</h1>
                        <img className="imgformu" src={GenerateDoc.tabCI[0].img}/>


                    </div>
                </div>
            </div>

                </body>

            </>

        )
    }

return (
    <>
        {formuInst}
    <div onClick={props.suivante}>Next</div>
    </>

);


}
export default Formulaire;