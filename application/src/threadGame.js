import React, {useState} from 'react';
import './App.css';
import BtnContext from "./PageDefault/BtnContext";



let etapes =[
    <p>Upon receiving a Purchase Order from 123 Importing, the exporter (Zen Export International) sends a
        Pro Forma Invoice (also referred to as a Commercial Invoice)</p>,
    <p>123 Importing applies for the letter of credit with its bank in New York.</p>,
    <p>The bank accepts this application and proceeds for the letter of credit, and sends the irrevocable letter
        of credit to the bank in Japan, requesting a confirmation.</p>]


function Main(props){
    const[etape, setEtape] = useState(-5);
    let centre;





    if(etape===0) {

        centre = <Accueil demarrer={()=> setEtape(1)} />
    }
    else {
        centre = <EtapeJeu etape ={etape} suivante={() => setEtape((etape+1)%18)} />
    }
    return (
       <center> <div className="main-page">
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

                <center><footer id = "foot"><Progress /></footer></center>


            </section>
       </div></center>
    )




}

function Accueil(props){
    let txtIntro = "Bienvenue dans notre Jeu";
    return(

        <>
            <div className= "acc">
                <h1 >{txtIntro}</h1>

            </div>
            <div id ="suite">Are you ready ?</div>
            <button id="next" onClick={props.demarrer}>Jouer</button>
        </>


    )
}

function EtapeJeu(props){
    let jeu;
    if(props.etape === -5){
        jeu = (
            <>
           <center> <div id="suite2">

                <p  className="contenuEtape">April 20th: The Importer is called 123 Importing Company, 89 High Street, New York, NY 70036, USA.</p>

        </div>
               <button id="next" onClick={props.suivante}>Next</button></center></>)
    }else if(props.etape === -4){
        jeu = (
            <>
            <div id="suite2" >

                <p className="contenuEtape">
                    <p>It is interested in purchasing 3000 men's cotton shirts from a supplier in Japan, as detailed on Purchase
                    Orders 7689 (1000 red/blue/white shirts in size S and 1000 red/blue/white shirts in size M) and 7690
                    (1000 red/blue/white shirts in size L) from a supplier (exporter) called Zen Export International
                    Company, 31 Hinga, Tokyo, Japan.</p>
                    <p>The value of this purchase is $30,000 plus 10% VAT.</p>
                    <p>Zen Export International Company is responsible for all expenses until the point of shipment, Japan. The
                        commercial invoice number is 3879. </p></p>

            </div>
                <button id="next" onClick={props.suivante}>Next</button>
            </>)
    }else if(props.etape === -3){

        jeu = (
            <>
            <div id="suite2">

                <p className="contenuEtape"> The shirts will be packed in boxes of 250 shirts.

                    Each box weighing 20 Kg 123 Importing completes the application for a Commercial Letter of Credit from its bank and is called
                    the applicant; the exporter in Japan, Zen Export International, is called the beneficiary.

                    The last date for presentation of documents for payment to the bank in Japan is May 15th. The last date
                    for presentation of documents at the bank in New York is May 15th.

                    World Wide Bank, International Operations, P.O. Box 144, Grand Street Station, NY, NY 50008, USA
                    Cable address: World Wide Bank, account: 123-987654

                    World Wide Bank/Japan, Central P.O. Box 6789, 5-1 Marunouchi 6-Chome, Chiyoda-ku, Tokyo 100,
                    Japan</p>

            </div>
                <button id="next" onClick={props.suivante}>Next</button>
                </>)
    }else if(props.etape === -2){
        jeu = (
            <>
            <div id="suite2">

                <p  className="contenuEtape"> Documents to be presented to the confirming bank in Japan:

                    - a Commercial Invoice No. 3879 (original and three copies), a full set of original onboard ocean Bill of
                    Lading no. 9965 marked "Freight Collect!

                    - B/L: packaging instructions (shirts to be sorted per size and model and packed in plastic bags)

                    Freight Forwarder: Asia Freight, P.O. Box 9853, 8 Marunouchi 5-Chame, Chiyoda-ku, Tokyo 100, Japan
                    Asia Freight is responsible for loading boxes on trailer.
                </p>

            </div>
                <button id="next" onClick={props.suivante}>Next</button>
                </>)
    }else if(props.etape === -1){
        jeu = (
            <>
            <div id="suite2">

                <center><p className="contenuEtape"> Ocean booking number 839217/10

                    Goods to be collected in port of destination by DML USA (VAT NUMBER: 3939392), Address New York,
                    New York 2001, USA. Traller number: TYT 2001 JKP.
                </p></center>

            </div><button id="next" onClick={props.suivante}>Next</button>

            </>)
    }
    else if(props.etape === 1){

        jeu = (
            <>
           <center> <p>Choose the right step.</p>
            <div id ="suite"><DevinerSuite className = "acc" suivante={props.suivante}
                                           possible={['1', '2', '3','4']}
                                           choixRep={[etapes[0]]}
                                           reponse={'2'} /> </div></center> </>)
    } else if(props.etape === 2){
        jeu = (
            <div id = "divformu"><Formulaire  suivante={props.suivante}

                         reponse={'3'} /></div>


        )
    } else if(props.etape === 3){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={['1', '2', '3','4']}
                                             reponse={'1'} /></div>

        )
    }else if(props.etape === 4){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={['1', '2', '3','4']}
                                             reponse={'1'} /></div>

        )}else if(props.etape === 5){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={['1', '2', '3','4']}
                                             reponse={'4'} /></div>

        )}else if(props.etape === 6){
            jeu = (
                <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                                 possible={['1', '2', '3','4']}
                                                 reponse={'3'} /></div>

            )}
    else if( props.etape === 17){
        jeu = (<><h1>Victoire ! </h1>
                <button id= "Play" onClick={props.suivante}>Retour à l'Accueil</button>
               </>
        )


    } else {
        jeu =  <button onClick={props.suivante}>Next Step</button>
    }

        if(props.etape < 0){
            return(
                <div className="acc">
                    <h1>Contexte</h1>
                    {jeu}
                </div>


            )

        }else {
            return(

            <div className="acc">
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
    }





    const btn = possible.map((txt)=>

            <>

            <div className= "divcont"onClick={() => check(txt)}>
                <div className="cards">
                    <div className="cont">
                        <h2>{txt}</h2>
                        <h3>Card {txt}</h3>
                        <p>Comming Soon...</p>


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
    }
    return(
        <center> <div className= "formu"> <form name= "form">
            reponse : <input type = "text" name = "rep"/>
            <btn onClick={check}>Enter</btn>

        </form></div></center>
    )

}


    function Progress({done}){
        const [style, setStyle] = React.useState({});

        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`
            }

            setStyle(newStyle);
        }, 200);
        return (
            <>
                <div><h2>E-COMM Time</h2></div>
           <center> <div className="progress">
                <div className="progress-done" style={style}>
                </div>
           </div></center>
                </>
        )

}


export default Main;
