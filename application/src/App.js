import './App.css';
import React, {useState, useEffect} from 'react';
import Main from "./threadGame";
import PreLoader2 from "./Preloader/Preloader2";
import Music from "./Components/MusicPlayer";
import cdlc from "./Sound/optheme.mp3";

import CreateParty from "./Server/CreateParty.";


function App() {

    const [start, setStart] = useState(0);
    const useState1 = useState(false);
    const [loading, setLoading] = useState1;


    const startGame = () => {
        setStart(1);
    }
    const createPartie = () => {
        setStart(2);
    }
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);

        }, 4500)
    }, [])
    let page;
    if (loading) {


        page = <>
            <PreLoader2/>
        </>;
    } else if (start === 0) {

        page = (


            <body className="App-header">


            <Music src={cdlc}/>

            <div className="contenuTxt">
                <h3>COMM</h3>
                <h3>COMM</h3>
                <div className="contenuTxt2"><h3 className="h3Txt">E-</h3><h3>E-</h3>
                </div>
            </div>

            <div className="textpresentation"><p>You want to practice ? This game is for you :)</p></div>
            <btn id="Play3" onClick={startGame}>
                Play
            </btn>

            <button id="Play3" onClick={createPartie}>Create a party</button>

            <div className="wrapper">

                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
                <div><span className="dot"/></div>
            </div>


            </body>


        )
    } else if (start === 1) {
        page = <Main returnMenuP={() => setStart(0)}/>
    } else if (start === 2) {
        page = <CreateParty returnMenuP={() => setStart(0)}/>;
    }

    return (

        <div className="App">
            {page}
        </div>
    );
}


export default App;