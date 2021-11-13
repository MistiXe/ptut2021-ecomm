import React, {useState} from 'react';
import './App.css';
import StepTxt from "./Components/StepTxt";
import ProgressBar from "./Components/ProgressBar";
import PageContext from "./Components/PageContext";



function Main(props){
    const[etape, setEtape] = useState(0);
    const[joursRestants, setJoursRestants] =useState(25);
    const[lastEtape, setLastEtape] = useState(0);
    let centre;

    const putContext = () => {
        setLastEtape(etape);
        setEtape(-10);
    }


    if(etape===0) {

        centre = <Accueil demarrer={()=> setEtape(1)} />
    }

    else if(etape===-10) {
        centre = <PageContext retour={() => setEtape(lastEtape)}/>
    }
    else {
        centre = <EtapeJeu etape ={etape} suivante={() => setEtape((etape+1)%19)} jrestant={joursRestants} erreur={() => setJoursRestants(joursRestants-1)}/>
    }
    return (
        <center> <div className="main-page">
            <section className="main">
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="navbar-item" >
                            <btn className="nav-link" onClick = {props.returnMenuP}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fad"
                                    data-icon="angle-double-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                                >
                                    <g className="fa-group">
                                        <path
                                            fill="currentColor"
                                            d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                            className="fa-secondary"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                            className="fa-primary"
                                        />
                                    </g>
                                </svg>
                                <span className="link-text">Menu</span>
                            </btn>
                        </li>


                        <li className="nav-item">
                            <div className="nav-link">

                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fad"
                                    data-icon="cat"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="svg-inline--fa fa-cat fa-w-16 fa-9x"
                                >
                                    <g className="fa-group">
                                        <path
                                            fill="currentColor"
                                            d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                                            className="fa-secondary"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                                            className="fa-primary"
                                        />
                                    </g>
                                </svg>
                                <span className="link-text" onClick={putContext}>Context</span>
                            </div>

                        </li>

                        <li className="nav-item">
                            <btn className="nav-link">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fad"
                                    data-icon="alien-monster"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
                                >
                                    <g className="fa-group">
                                        <path
                                            fill="currentColor"
                                            d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                                            className="fa-secondary"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M160,320h64V224H160Zm192-96v96h64V224Z"
                                            className="fa-primary"
                                        />
                                    </g>
                                </svg>
                                <span className="link-text">User</span>
                            </btn>
                        </li>

                        <p className="version">E-COMM V_0.2</p>

                    </ul>



                </nav>



                {centre}


            </section>
        </div></center>
    )




}

function Accueil(props){
    let txtIntro = "Welcome in E-COMM !";
    return(

        <>
            <div className= "acc">
                <h1 >{txtIntro}</h1>

            </div>
            <div id ="suite">Are you ready ?</div>
            <button id="next" onClick={props.demarrer}>Play</button>
        </>


    )
}

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function EtapeJeu(props){
    let jeu;

    if(props.etape === 1){

        jeu = (
            <>

                <center> <p>Choose the right step.</p>

                    <div id ="suite"><DevinerSuite className = "acc" suivante={props.suivante}
                                                   possible={[{id: 1, text:  StepTxt[0]},{id: 2, text:  StepTxt[3]},{id: 3, text:  StepTxt[15]}]}
                                                   reponse={1} erreur = {props.erreur}/> </div></center> </>)
    } else if(props.etape === 2){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1, text: StepTxt[11]},{id: 2, text: StepTxt[7]},{id: 3, text: StepTxt[1]}]}
                                             reponse={3} erreur = {props.erreur} /></div>




        )
    } else if(props.etape === 3){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1, text: StepTxt[2]},{id: 2, text: StepTxt[0]},{id: 3, text: StepTxt[14]}]}
                                             reponse={1} erreur = {props.erreur} /></div>


        )
    }else if(props.etape === 4){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1, text: StepTxt[13]},{id: 2, text: StepTxt[3]},{id: 3, text: StepTxt[14]}]}
                                             reponse={2} erreur = {props.erreur} /></div>


        )}else if(props.etape === 5){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1, text: StepTxt[1]},{id: 2, text: StepTxt[1]},{id: 3, text: StepTxt[4]}]}
                                             reponse={3} erreur = {props.erreur} /></div>

        )}else if(props.etape === 6){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1,text: StepTxt[5]},{id: 2, text: StepTxt[1]},{id: 3, text: StepTxt[1]}]}
                                             reponse={1} erreur = {props.erreur} /></div>

        )}else if(props.etape === 7){
    jeu = (
        <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                         possible={[{id: 1,text: StepTxt[1]},{id: 2, text: StepTxt[1]},{id: 3, text: StepTxt[6]}]}
                                         reponse={3} erreur = {props.erreur} /></div>

    )}else if(props.etape === 8){
            jeu = (
                <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                                 possible={[{id: 1,text: StepTxt[1]},{id: 2, text: StepTxt[1]},{id: 3, text: StepTxt[7]}]}
                                                 reponse={3} erreur = {props.erreur} /></div>

            )



    } else if(props.etape === 9){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1,text: StepTxt[8]},{id: 2, text: StepTxt[14]},{id: 3, text: StepTxt[11]}]}
                                             reponse={1} erreur = {props.erreur} /></div>

        )



    }else if(props.etape === 10){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1,text: StepTxt[1]},{id: 2, text: StepTxt[9]},{id: 3, text: StepTxt[6]}]}
                                             reponse={2} erreur = {props.erreur} /></div>

        )



    }else if(props.etape === 11){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1,text: StepTxt[10]},{id: 2, text: StepTxt[0]},{id: 3, text: StepTxt[9]}]}
                                             reponse={2} erreur = {props.erreur} /></div>

        )



    }else if(props.etape === 12){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1,text: StepTxt[3]},{id: 2, text: StepTxt[13]},{id: 3, text: StepTxt[11]}]}
                                             reponse={3} erreur = {props.erreur} /></div>

        )



    }else if(props.etape === 13){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1,text: StepTxt[1]},{id: 2, text: StepTxt[12]},{id: 3, text: StepTxt[2]}]}
                                             reponse={2} erreur = {props.erreur} /></div>

        )



    }else if(props.etape === 14){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1,text: StepTxt[13]},{id: 2, text: StepTxt[14]},{id: 3, text: StepTxt[16]}]}
                                             reponse={1} erreur = {props.erreur} /></div>

        )



    }else if(props.etape === 15){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1,text: StepTxt[9]},{id: 2, text: StepTxt[14]},{id: 3, text: StepTxt[8]}]}
                                             reponse={2} erreur = {props.erreur} /></div>

        )



    }else if(props.etape === 16){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1,text: StepTxt[15]},{id: 2, text: StepTxt[12]},{id: 3, text: StepTxt[11]}]}
                                             reponse={1} erreur = {props.erreur} /></div>

        )



    }


    else if( props.etape === 17){
      jeu =(  <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                         possible={[{id: 1,text: StepTxt[8]},{id: 2, text: StepTxt[0]},{id: 3, text: StepTxt[16]}]}
                                         reponse={3} erreur = {props.erreur} /></div>)


    } else if( props.etape === 18) {
        jeu = (<div id="suite"><h2>Good Job ! </h2>

        <button onClick={props.returnMenuP}>Menu</button>

        </div>)
    }else {
        jeu =  <button onClick={props.suivante}>Next Step</button>
    }

    if(props.etape < 0){
        return(
            <div className="acc">
                <h1>Context</h1>

                {jeu}
            </div>


        )

    }else {
        return(

            <div className="acc">
                <ProgressBar completed={props.jrestant}/>
                <h1>Actual Step : {props.etape}</h1>
                {jeu}
            </div>
        )
    }


}

function DevinerSuite(props){
    const possible = props.possible;
    function check(txt){

        if ( props.reponse === txt){
            props.suivante()
        }
        else {
            props.erreur();
        }
    }




    const btn = possible.map(
        (txt)=>

            <>

                <div className= "divcont" onClick={() => check(txt.id)}>
                    <div className="cards">
                        <div className="cont">
                            <h2>{txt.id}</h2>
                            <h3>Card {txt.id}</h3>

                            <h5>{txt.text}</h5>


                        </div>
                    </div>
                </div></>);
    return(
        <>
            {btn}
        </>


    )
}






function Formulaire(props){
    function check(){
        let rep = document.forms["form"]["rep"].value
        if(rep === props.reponse){
            props.suivante()
        }
        else{
            props.erreur()
        }
    }
    return(
        <center> <div className= "formu"> <form name= "form">
            reponse : <input type = "text" name = "rep" onKeyPress={e => {
            if (e.key === 'Enter') e.preventDefault();
        }}/>
            <btn onClick={check}>Enter</btn>

        </form></div></center>
    )

}


export default Main;