import React, {useState} from 'react';
import './App.css';
import BtnContext from "./Components/BtnContext";


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
                                <BtnContext />
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

                    <p className="version">E-COMM V_0.3</p>

                    </ul>



                </nav>



                {centre}

                <center><footer id = "foot"><Progress /></footer></center>


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
                                           possible={[{id: 1, text: "je suis la première carte"},{id: 2, text: "je suis la deuxième carte"},{id: 3, text: "je suis la troisième carte"},{id: 4, text: "je suis la quatrième quatre"}]}
                                           reponse={2} /> </div></center> </>)
    } else if(props.etape === 2){
        jeu = (
            <div id = "divformu"><Formulaire  suivante={props.suivante}

                         reponse={'3'} /></div>


        )
    } else if(props.etape === 3){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1, text: "je suis la première carte"},{id: 2, text: "je suis la deuxième carte"},{id: 3, text: "je suis la troisième carte"},{id: 4, text: "je suis la quatrième quatre"}]}
                                             reponse={1} /></div>

        )
    }else if(props.etape === 4){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1, text: "je suis la première carte"},{id: 2, text: "je suis la deuxième carte"},{id: 3, text: "je suis la troisième carte"},{id: 4, text: "je suis la quatrième quatre"}]}
                                             reponse={1} /></div>

        )}else if(props.etape === 5){
        jeu = (
            <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                             possible={[{id: 1, text: "je suis la première carte"},{id: 2, text: "je suis la deuxième carte"},{id: 3, text: "je suis la troisième carte"},{id: 4, text: "je suis la quatrième quatre"}]}
                                             reponse={4} /></div>

        )}else if(props.etape === 6){
            jeu = (
                <div id = "suite"> <DevinerSuite className = "acc" suivante={props.suivante}
                                                 possible={[{id: 1, text: "je suis la première carte"},{id: 2, text: "je suis la deuxième carte"},{id: 3, text: "je suis la troisième carte"},{id: 4, text: "je suis la quatrième quatre"}]}
                                                 reponse={3} /></div>

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
                    <h1>Context</h1>
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




    const btn = possible.map(
        (txt)=>

            <>

            <div className= "divcont" onClick={() => check(txt.id)}>
                <div className="cards">
                    <div className="cont">
                        <h2>{txt.id}</h2>
                        <h3>Card {txt.id}</h3>
                        <p>{txt.text}</p>


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


function Ping(props){
    return <p>Ping : </p>
}



export default Main;
