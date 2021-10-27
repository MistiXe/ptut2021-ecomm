import React, {useState} from 'react';
import './App.css';
import BtnContext from "./PageDefault/BtnContext";
import App from "./App";




function Main(props){
    const[etape, setEtape] = useState(0);
    let centre;
    if(etape===0) {

        centre = <Accueil demarrer={()=> setEtape(1)} />
    }
    else {
        centre = <EtapeJeu etape ={etape} suivante={() => setEtape((etape+1)%18)} />
    }
    return (
        <div className="main-page">
            <section className="main">
               <center> <nav>
                    <div className= "logo">
                        <h4>E-COMM</h4>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <BtnContext />
                        </li>
                        <li>
                            <button id = "playTuto" type="button">
                            </button>
                        </li>


                    </ul>
                </nav></center>
                {centre}

                <footer id = "foot"> <h1> E-COMM V_0.1</h1> </footer>


            </section>
        </div>
    )




}

function Accueil(props){
    return(
        <>
            <div className= "acc">
                <h1 >Bienvenue dans notre Jeu ! </h1>
            </div>
            <button className="btnJ" onClick={props.demarrer}>Jouer</button>
        </>


    )
}

function EtapeJeu(props){
    let jeu;
    if(props.etape === 1){
        jeu = (
            <div id ="suite"><DevinerSuite className = "acc" suivante={props.suivante}
                                           possible={['a', 'b', 'c']}
                                           reponse={'b'} /> </div>)
    } else if(props.etape === 2){
        jeu = (
            <Formulaire  suivante={props.suivante}

                         reponse={'e'} />

        )
    } else if(props.etape === 3){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={['a', 'b', 'c', 'd', 'e']}
                                             reponse={'e'} /></div>

        )
    }
    else if( props.etape === 17){
        jeu = (<><h1>Victoire ! </h1>
                <button id= "Play" onClick={props.suivante}>Retour à l'Accueil</button>
               </>
        )


    } else {
        jeu =  <button id= "Play" onClick={props.suivante}>Etape Suivante</button>
    }

    return(

        <div className = "acc">
            <h1>Vous êtes à l'étape {props.etape}</h1>
            {jeu}
        </div>
    )

}

function DevinerSuite(props){
    const possible = props.possible;
    function check(txt){
        if ( props.reponse === txt){
            props.suivante()
        }
    }
    const btn = possible.map((txt)=>
        <center><btn className = "btnJ" onClick={() => check(txt)}>{txt}</btn></center>);
    return(
        <>
        <div className="card">
            <div className= "container">

            <p className="props">{btn[0]}</p>
            </div>
        </div>
            <div className="card">
                <div className= "container">

                    <p className="props">{btn[1]}</p>
                </div>
            </div>
            <div className="card">
                <div className= "container">
                    <center><p className="props">{btn[2]}</p></center>
                </div>

            </div>
            <div className="card">
                <div className= "container">
                    <center><p className="props">{btn[3]}</p></center>
                </div>

            </div>
            <div className="card">
                <div className= "container">
                    <center><p className="props">{btn[4]}</p></center>
                </div>

            </div>

        </>


)
}

function Formulaire(props){
    function check(){
        let rep = document.forms["form"]["rep"].value
        if(rep === props.reponse){
            props.suivante()
        }
    }
    return(
        <center> <div className= "formu"> <form name= "form">
            reponse : <input type = "text" name = "rep"/>
            <btn onClick={check}>Valider</btn>

        </form></div></center>
    )

}



export default Main;
