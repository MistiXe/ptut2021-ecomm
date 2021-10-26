import React, {useState} from 'react';
import './App.css';
import App from "./App";


function Main(props){
    const[etape, setEtape] = useState(0);

    if(etape === 0){
        return(
            <Accueil demarrer={()=> setEtape(1)} />
        )
    }else{
        return (
            <EtapeJeu etape ={etape} suivante={() => setEtape(etape+1)} />
        )
    }

    if(etape === 17){


        }


}

function Accueil(props){
    return(
        <>
      <div className= "acc">
            <h1>Bienvenue dans notre Jeu ! </h1>
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
    } else {
        jeu =  <button className = "acc" onClick={props.suivante}>Etape Suivante</button>
    }
    if( props.etape === 17){
        jeu = <h1>Victoire ! </h1>
        jeu = props.suivante === 1


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
  <btn onClick={() => check(txt)}>{txt}</btn>);
  return(
      <div className="tableauProp">{btn}</div>
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
       <div className= "formu"> <form name= "form">
            reponse : <input type = "text" name = "rep"/>
            <btn onClick={check}>Valider</btn>

       </form></div>
    )

}



export default Main;