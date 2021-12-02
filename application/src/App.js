import './App.css';
import React, {useState, useEffect} from 'react';
import Main from "./threadGame";
import PreLoader2 from "./Preloader/Preloader2";
import Music from "./Components/MusicPlayer";
import cdlc from "./Sound/optheme.mp3";
import calv from "./Sound/Billy - Calvitie.mp3"

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
            <>



            <div className="sky">


                <div className="clouds"></div>





                <div className="airplane">



                    <div className="plane">

                        <Music src={cdlc}/>
                      <p>E-COMM</p>
                    <img src="https://i.ibb.co/SPpRcJz/airplane.png">
                    </img>

                        <div className="flame"></div>
                        <div className="flame flame2"></div>



                    <btn id="Play3" onClick={startGame}>
                        Play
                    </btn>
                    <div>
                        <button id="Play3" onClick={createPartie}>Create a party</button></div>
                </div>
                </div>



                <div className="mountains"></div>
            </div>
                </>





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