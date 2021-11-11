import './App.css';
import React, {useState, useEffect} from 'react';
import Main from "./threadGame";
import PreLoader2 from "./Preloader/Preloader2";
import sound from "./Sound/persephone.mp3";




function App(){

    const [start, setStart] = useState(false);
    const [startCreate, setStartCreate] = useState(false);
    const useState1 = useState(false);
    const [loading, setLoading] = useState1;



    const createParty = () => {
        setStartCreate(true);
    }

    const startGame = () => {
        setStart(true);
    }
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);

        }, 4500)
    }, [])
    let page;
    if(loading){


        page = <>
            <PreLoader2 />
        </>;
    }
    else if(!start){


        page = (<body id ="menu">
            <header className="App-header">


                <div className="contenuTxt">
                    <h3>COMM</h3>
                    <h3>COMM</h3>
                    <div className= "contenuTxt2"><h3 className="h3Txt">E-</h3><h3>E-</h3>
                    </div>
                </div>
                <div className="textpresentation"> <p>You want to practice ? This game is for you :)</p></div>


                <btn id ="Play" onClick={startGame} >
                    Play
                </btn>

                <button id ="Play" onClick={createParty} className="btn">Create a party</button>

            </header></body>
        )
    }
    else {
        page = <Main returnMenuP = {() => setStart(false)}/>
    }

    return (

        <div className="App">
            {page}
        </div>
    );
}


export default App;