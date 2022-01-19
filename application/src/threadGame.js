import React, {useEffect, useState} from 'react';
import './App.css';
import StepTxt from "./Components/data/StepTxt";

import ProgressBar from "./Components/ProgressBar";

import PageContext from "./Components/PageContext";
import Formulaire from "./Components/Formulaire";
import imageicon from "./image/commercee.jpg";
import {useCookies} from "react-cookie";
import NavBar from "./Components/NavBar";
import Results from "./Components/Results";
import Music from "./Components/MusicPlayer";
import musiP from "./Sound/persephone.mp3";

function Main(props) {
    const [etape, setEtape] = useState(21);
    const [joursRestants, setJoursRestants] = useState(25);
    const [lastEtape, setLastEtape] = useState();
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [cookies, setCookie] = useCookies(['etape', 'time', 'dleft']);

    useEffect(() => {
        window.addEventListener("beforeunload", (e) => {
            e.preventDefault();
            e.returnValue = "";
        });
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    let centre;
    if (etape === 0) {
        centre = <Accueil demarrer={() => {
            if (cookies.etape && cookies.etape !== "0") {
                setEtape(parseInt(cookies.etape))
                setJoursRestants(parseInt(cookies.dleft))
                setSeconds(parseInt(cookies.time))
            } else {

                if (etape !== -10) {
                    setLastEtape(1);
                    setEtape(-10)
                }
            }
            setIsActive(true)
        }}/>

    } else if (etape === -9) {
        centre = (<><h1>About Us</h1>
            <h3>Group F of PTUT 2021-2022 </h3>
            <p>Enginers Software : Hodheyfa Mahdjoub, Florent Gerber the ultimate turbo ferrarim v10 max</p>
            <p>Writters : Théo Dedaele, Dan Vovc </p>

            <button id="Play4" onClick={() => setEtape(lastEtape)}>Return</button>
        </>);


    } else if (etape === -10) {
        centre = <PageContext retour={() => setEtape(lastEtape)}/>

    } else if (etape === 23) {
        centre = (<Results return={() => {
                setCookie('etape', 0);
                props.returnMenuP()
            }} seconds={seconds} jrestant={joursRestants}/>
        );

    } else {
        centre = <EtapeJeu etape={etape} suivante={() => {
            setEtape((etape + 1));
            setCookie('etape', etape + 1);
            setCookie('time', seconds);
            setCookie('dleft', joursRestants);
        }} jrestant={joursRestants}
                           erreur={() => {
                               if (joursRestants !== 0) {
                                   setJoursRestants(joursRestants - 1)
                               }
                           }} fin={() => {
            setIsActive(false);
            setEtape(etape + 1)}}/>
    }

    return (
        <NavBar returnM={() => {

            setCookie('etape', 0)
            props.returnMenuP()
        }}

                context={() => {
                    if (etape !== -10) {
                        setLastEtape(etape);
                        setEtape(-10)
                    }
                }} aboutus={() => {
            if (etape !== -9) {
                setLastEtape(etape);
                setEtape(-9)
            }
        }} centre={centre} seconds={seconds}/>

    )


}

function Accueil(props) {
    return (
        <>


            <div className="cardsF">
                <img src={imageicon} alt="img"/>

                <div className="debile"><h3 className="h3Txt">E-</h3><h3>E-</h3>
                </div>
                <div className="contenuTxtT">
                    <h3>V.1 >></h3>
                    <h3>V.1 >></h3>

                </div>

                <div className="info">Version V_1
                    <h1>What's up ?</h1>

                    <p>
                        We hope you will get the best score !
                    </p>
                </div>


            </div>
            <button id="next2" onClick={props.demarrer}>Play</button>
            <div className="outro">


                <div className="cards2">


                    <div className="info2">

                        <h3>Step Cards</h3>
                        <p>Choose the right card to choose the right step.</p>
                    </div>

                </div>

                <div className="cards2">
                    <div className="info2">
                        <h3>Document</h3>
                        <p>Many steps have a document to complete.</p>
                    </div>

                </div>
                <div className="cards2">
                    <div className="info2">
                        <h3>Time</h3>
                        <p>Warning ! Time is money !</p>
                    </div>

                </div>

            </div>


        </>


    )
}

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function EtapeJeu(props) {
    let jeu;
    let intitule;

    if (props.etape === 1) {
        intitule = (<div>intitulé</div>);
        jeu = (
            <>
                <center><p>Choose the right step.</p>

                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[0]}, {
                                                      id: 2,
                                                      text: StepTxt[3]
                                                  }, {id: 3, text: StepTxt[15]}, {id: 4, text: StepTxt[7]}]}
                                                  reponse={1} erreur={props.erreur}/></div>
                </center>
            </>)
    } else if (props.etape === 2) {
        jeu = (
            <>
                <Formulaire etape={props.etape} suivante={props.suivante} erreur={props.erreur}/>
            </>


        )
        //Suite 2
    } else if (props.etape === 3) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[11]}, {id: 2, text: StepTxt[7]}, {
                                              id: 3,
                                              text: StepTxt[1]
                                          }, {id: 4, text: StepTxt[7]}]}
                                          reponse={3} erreur={props.erreur}/></div>


        )
    } else if (props.etape === 4) {
        //Email exercice
        jeu = (
            <Formulaire etape={props.etape} suivante={props.suivante} erreur={props.erreur}/>


        )
    } else if (props.etape === 5) {
        jeu = (
            <Formulaire etape={props.etape} suivante={props.suivante} erreur={props.erreur}/>


        )

//Suite 3
    } else if (props.etape === 6) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[1]}, {id: 2, text: StepTxt[1]},
                                              {id: 3, text: StepTxt[7]},{id: 4, text: StepTxt[4]}]}
                                          reponse={4} erreur={props.erreur}/></div>


        )
    } else if (props.etape === 7) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[1]}, {id: 2, text: StepTxt[1]}, {
                                              id: 3,
                                              text: StepTxt[4]
                                          }, {id: 4, text: StepTxt[7]}]}
                                          reponse={3} erreur={props.erreur}/></div>

        )
    } else if (props.etape === 8) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[5]}, {id: 2, text: StepTxt[1]}, {
                                              id: 3,
                                              text: StepTxt[1]
                                          }, {id: 4, text: StepTxt[7]}]}
                                          reponse={1} erreur={props.erreur}/></div>

        )


    } else if (props.etape === 9) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[1]}, {id: 2, text: StepTxt[1]}, {
                                              id: 3,
                                              text: StepTxt[7]
                                          }, {id: 4, text: StepTxt[7]}]}
                                          reponse={3} erreur={props.erreur}/></div>

        )


    } else if (props.etape === 10) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[7]}, {id: 2, text: StepTxt[14]}, {
                                              id: 3,
                                              text: StepTxt[11]
                                          },{id: 4, text: StepTxt[8]}]}
                                          reponse={4} erreur={props.erreur}/></div>

        )


    } else if (props.etape === 11) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[1]}, {id: 2, text: StepTxt[9]}, {
                                              id: 3,
                                              text: StepTxt[6]
                                          }, {id: 4, text: StepTxt[7]}]}
                                          reponse={2} erreur={props.erreur}/></div>

        )


    } else if (props.etape === 12) {
        jeu = (
            <Formulaire etape={props.etape} suivante={props.suivante} erreur={props.erreur}/>


        )

//Suite 9
    } else if (props.etape === 13) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[2]}, {id: 2, text: StepTxt[0]}, {
                                              id: 3,
                                              text: StepTxt[14]
                                          }, {id: 4, text: StepTxt[7]}]}
                                          reponse={1} erreur={props.erreur}/></div>


        )

    } else if (props.etape === 14) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[10]}, {id: 2, text: StepTxt[0]}, {
                                              id: 3,
                                              text: StepTxt[9]
                                          }, {id: 4, text: StepTxt[7]}]}
                                          reponse={2} erreur={props.erreur}/></div>

        )

    } else if (props.etape === 15) {
        jeu = (
            <Formulaire etape={props.etape} suivante={props.suivante} erreur={props.erreur}/>


        )


//Suite 11
    } else if (props.etape === 16) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[3]}, {id: 2, text: StepTxt[13]}, {
                                              id: 3,
                                              text: StepTxt[11]
                                          }, {id: 4, text: StepTxt[7]}]}
                                          reponse={3} erreur={props.erreur}/></div>

        )


    } else if (props.etape === 17) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[7]}, {id: 2, text: StepTxt[0]}, {
                                              id: 3,
                                              text: StepTxt[14]
                                          }, {id: 4, text: StepTxt[2]}]}
                                          reponse={4} erreur={props.erreur}/></div>


        )
    } else if (props.etape === 18) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[1]}, {id: 2, text: StepTxt[12]}, {
                                              id: 3,
                                              text: StepTxt[2]
                                          }, {id: 4, text: StepTxt[7]}]}
                                          reponse={2} erreur={props.erreur}/></div>

        )


    } else if (props.etape === 19) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[13]}, {id: 2, text: StepTxt[14]}, {
                                              id: 3,
                                              text: StepTxt[16]
                                          }, {id: 4, text: StepTxt[7]}]}
                                          reponse={1} erreur={props.erreur}/></div>

        )


    } else if (props.etape === 20) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[9]}, {id: 2, text: StepTxt[14]}, {
                                              id: 3,
                                              text: StepTxt[8]
                                          }, {id: 4, text: StepTxt[7]}]}
                                          reponse={2} erreur={props.erreur}/></div>

        )


    } else if (props.etape === 21) {
        jeu = (
            <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                          possible={[{id: 1, text: StepTxt[7]}, {id: 2, text: StepTxt[12]}, {
                                              id: 3,
                                              text: StepTxt[11]
                                          }, {id: 4, text: StepTxt[15]}]}
                                          reponse={4} erreur={props.erreur}/></div>

        )


    } else if (props.etape === 22) {
        jeu = (<div id="suite"><DevinerSuite className="acc" suivante={props.fin}
                                             possible={[{id: 1, text: StepTxt[8]}, {id: 2, text: StepTxt[0]}, {
                                                 id: 3,
                                                 text: StepTxt[16]
                                             }, {id: 4, text: StepTxt[7]}]}
                                             reponse={3} erreur={props.erreur}/></div>)


    } else {
        jeu = <button onClick={props.suivante}>Next Step</button>
    }

    return (



        <div className="acc">
            <ProgressBar completed={props.jrestant > 0 ? props.jrestant : 0}/>
           <Music src={musiP}/>

                <p className="version" onClick={props.aboutus}>E-COMM V_1</p>

            <h1>Actual Step : {props.etape} {intitule}</h1>
            {jeu}
        </div>
    )


}

function DevinerSuite(props) {
    const possible = props.possible;

    function check(txt) {

        if (props.reponse === txt) {
            props.suivante()
        } else {
            props.erreur();
        }
    }


    const btn = possible.map(
        (txt) =>

            <>

                <div className="divcont" onClick={() => check(txt.id)}>
                    <div className="cards">
                        <div className="cont">
                            <h2 className="font1">{txt.id}</h2>
                            <h3 className="font2">Card {txt.id}</h3>

                            <h5 className="font2">{txt.text}</h5>


                        </div>
                    </div>
                </div>
            </>);
    return (
        <>
            {btn}
        </>


    )
}


export default Main;