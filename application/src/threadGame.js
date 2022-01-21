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
    const [etape, setEtape] = useState(0);
    const [joursRestants, setJoursRestants] = useState(25);
    const [lastEtape, setLastEtape] = useState();
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [cookies, setCookie] = useCookies(['etape', 'time', 'dleft', 'pformu']);

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
                setCookie("etape", 0);
                setCookie("time", 0);
                setCookie("dleft", 25)
                setCookie("pformu", 0)

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
                setCookie('pformu', 0);
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
            setEtape(etape + 1)
        }}
                           pformu={parseInt(cookies.pformu)}
                           setPformu={(v) => setCookie("pformu", v)}
        />
    }

    return (
        <NavBar returnM={() => {

            setCookie('etape', 0)
            setCookie('pformu', 0)
            props.returnMenuP()
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
        }} centre={centre} seconds={seconds} suivante={() => {
            setEtape((etape + 1));
            setCookie('etape', etape + 1);
            setCookie('time', seconds);
            setCookie('dleft', joursRestants);
        }}/>

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

                        <h3>The Game</h3>
                        <p>Your team has 25 days to complete an International Trade game</p>
                    </div>

                </div>

                <div className="cards2">
                    <div className="info2">
                        <h3>Steps and Documents</h3>
                        <p>Put the different steps of International Trade into the correct order, as
                            well as completing necessary documents</p>
                    </div>

                </div>
                <div className="cards2">
                    <div className="info2">
                        <h3>Score</h3>
                        <p>The score is calculated with the time and the days left. Be careful, each wrongly submitted
                            document will result in loosing one day</p>
                    </div>

                </div>
                <div className="cards2">
                    <div className="info2">
                        <h3>Goal</h3>
                        <p>Complete the steps and submit all the documents within the 25 days. The team with the best
                            score wins the game.</p>
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
    let intitule = "";

    if (props.etape === 1) {
        jeu = (
            <>
                <center><p>Choose the right step in International Trade among the 4 cards.</p>

                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[0]}, {
                                                      id: 2,
                                                      text: StepTxt[3]
                                                  }, {id: 3, text: StepTxt[15]}, {id: 4, text: StepTxt[7]}]}
                                                  reponse={1} erreur={props.erreur}/></div>
                </center>
            </>)
    } else if (props.etape === 2) {
        intitule = (<div>Commercial Invoice</div>);
        jeu = (
            <>
                <Formulaire etape={props.etape} suivante={props.suivante} erreur={props.erreur}
                            pformu={parseInt(props.pformu)} setPFormu={props.setPformu}/>
            </>


        )
        //Suite 2
    } else if (props.etape === 3) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[11]}, {id: 2, text: StepTxt[6]}, {
                                                      id: 3,
                                                      text: StepTxt[1]
                                                  }, {id: 4, text: StepTxt[12]}]}
                                                  reponse={3} erreur={props.erreur}/></div>
                </center>
            </>
        )
    } else if (props.etape === 4) {
        //Email exercice
        intitule = (<div>Email</div>);
        jeu = (
            <Formulaire etape={props.etape} suivante={props.suivante} erreur={props.erreur}
                        pformu={parseInt(props.pformu)} setPFormu={props.setPformu}/>


        )
    } else if (props.etape === 5) {
        intitule = (<div>Application for issuing Letter of Credit</div>);
        jeu = (
            <Formulaire etape={props.etape} suivante={props.suivante} erreur={props.erreur}
                        pformu={parseInt(props.pformu)} setPFormu={props.setPformu}/>


        )

//Suite 3
    } else if (props.etape === 6) {

        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[9]}, {id: 2, text: StepTxt[4]},
                                                      {id: 3, text: StepTxt[7]}, {id: 4, text: StepTxt[2]}]}
                                                  reponse={4} erreur={props.erreur}/></div>
                </center>
            </>
        )
    } else if (props.etape === 7) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[13]}, {id: 2, text: StepTxt[15]}, {
                                                      id: 3,
                                                      text: StepTxt[3]
                                                  }, {id: 4, text: StepTxt[7]}]}
                                                  reponse={3} erreur={props.erreur}/></div>
                </center>
            </>)
    } else if (props.etape === 8) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[4]}, {id: 2, text: StepTxt[3]}, {
                                                      id: 3,
                                                      text: StepTxt[13]
                                                  }, {id: 4, text: StepTxt[16]}]}
                                                  reponse={1} erreur={props.erreur}/></div>
                </center>
            </>
        )


    } else if (props.etape === 9) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[9]}, {id: 2, text: StepTxt[3]}, {
                                                      id: 3,
                                                      text: StepTxt[5]
                                                  }, {id: 4, text: StepTxt[7]}]}
                                                  reponse={3} erreur={props.erreur}/></div>
                </center>
            </>
        )


    } else if (props.etape === 10) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[8]}, {id: 2, text: StepTxt[14]}, {
                                                      id: 3,
                                                      text: StepTxt[11]
                                                  }, {id: 4, text: StepTxt[6]}]}
                                                  reponse={4} erreur={props.erreur}/></div>
                </center>
            </>
        )


    } else if (props.etape === 11) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[14]}, {id: 2, text: StepTxt[7]}, {
                                                      id: 3,
                                                      text: StepTxt[6]
                                                  }, {id: 4, text: StepTxt[8]}]}
                                                  reponse={2} erreur={props.erreur}/></div>
                </center>
            </>
        )


    } else if (props.etape === 12) {
        intitule = (<div>Shipper's letter of instruction</div>);
        jeu = (

            <Formulaire etape={props.etape} suivante={props.suivante} erreur={props.erreur}
                        pformu={parseInt(props.pformu)} setPFormu={props.setPformu}/>


        )

//Suite 9
    } else if (props.etape === 13) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[8]}, {id: 2, text: StepTxt[0]}, {
                                                      id: 3,
                                                      text: StepTxt[14]
                                                  }, {id: 4, text: StepTxt[7]}]}
                                                  reponse={1} erreur={props.erreur}/></div>
                </center>
            </>

        )

    } else if (props.etape === 14) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[1]}, {id: 2, text: StepTxt[9]}, {
                                                      id: 3,
                                                      text: StepTxt[10]
                                                  }, {id: 4, text: StepTxt[7]}]}
                                                  reponse={2} erreur={props.erreur}/></div>
                </center>
            </>
        )

    } else if (props.etape === 15) {
        intitule = (<div>Bill of Lading</div>);
        jeu = (
            <Formulaire etape={props.etape} suivante={props.suivante} erreur={props.erreur}
                        pformu={parseInt(props.pformu)} setPFormu={props.setPformu}/>


        )


//Suite 11
    } else if (props.etape === 16) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[3]}, {id: 2, text: StepTxt[13]}, {
                                                      id: 3,
                                                      text: StepTxt[10]
                                                  }, {id: 4, text: StepTxt[7]}]}
                                                  reponse={3} erreur={props.erreur}/></div>
                </center>
            </>
        )


    } else if (props.etape === 17) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[7]}, {id: 2, text: StepTxt[5]}, {
                                                      id: 3,
                                                      text: StepTxt[14]
                                                  }, {id: 4, text: StepTxt[11]}]}
                                                  reponse={4} erreur={props.erreur}/></div>

                </center>
            </>
        )
    } else if (props.etape === 18) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[1]}, {id: 2, text: StepTxt[12]}, {
                                                      id: 3,
                                                      text: StepTxt[2]
                                                  }, {id: 4, text: StepTxt[7]}]}
                                                  reponse={2} erreur={props.erreur}/></div>
                </center>
            </>
        )


    } else if (props.etape === 19) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[13]}, {id: 2, text: StepTxt[11]}, {
                                                      id: 3,
                                                      text: StepTxt[16]
                                                  }, {id: 4, text: StepTxt[7]}]}
                                                  reponse={1} erreur={props.erreur}/></div>
                </center>
            </>
        )


    } else if (props.etape === 20) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[9]}, {id: 2, text: StepTxt[14]}, {
                                                      id: 3,
                                                      text: StepTxt[8]
                                                  }, {id: 4, text: StepTxt[12]}]}
                                                  reponse={2} erreur={props.erreur}/></div>
                </center>
            </>
        )


    } else if (props.etape === 21) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.suivante}
                                                  possible={[{id: 1, text: StepTxt[7]}, {id: 2, text: StepTxt[12]}, {
                                                      id: 3,
                                                      text: StepTxt[11]
                                                  }, {id: 4, text: StepTxt[15]}]}
                                                  reponse={4} erreur={props.erreur}/></div>
                </center>
            </>
        )


    } else if (props.etape === 22) {
        jeu = (
            <>
                <center><p>Choose the right step in International Sales among the 4 cards.</p>
                    <div id="suite"><DevinerSuite className="acc" suivante={props.fin}
                                                  possible={[{id: 1, text: StepTxt[8]}, {id: 2, text: StepTxt[0]}, {
                                                      id: 3,
                                                      text: StepTxt[16]
                                                  }, {id: 4, text: StepTxt[7]}]}
                                                  reponse={3} erreur={props.erreur}/></div>
                </center>
            </>)


    } else {
        jeu = <button onClick={props.suivante}>Next Step</button>
    }

    return (


        <div className="acc">
            <ProgressBar completed={props.jrestant > 0 ? props.jrestant : 0}/>
            <Music src={musiP}/>

            <p className="version" onClick={props.aboutus}>E-COMM V_1</p>

            <h1>Step : {props.etape} {intitule}</h1>
            {jeu}
        </div>
    )


}

function DevinerSuite(props) {
    const possible = props.possible;

    function check(txt) {

        if (props.reponse === txt) {
            alert("Well done !")
            props.suivante()
        } else {
            alert("Try again !")
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