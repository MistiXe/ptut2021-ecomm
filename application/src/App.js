import './App.css';

import React, {useState, useEffect} from 'react';
import Main from "./threadGame";
import PreLoader2 from "./Preloader/Preloader2";
import Music from "./Components/MusicPlayer";
import cdlc from "./Sound/optheme.mp3";




function App() {

    const [start, setStart] = useState(0);
    const useState1 = useState(false);
    const [loading, setLoading] = useState1;


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


                    <div className="clouds"/>


                    <div className="airplane">


                        <div className="plane">

                            <Music  src={cdlc}/>

                            <p className="rien">E-COMM</p>

                            <img src="https://i.ibb.co/SPpRcJz/airplane.png" alt="img">
                            </img>

                            <div className="flame"/>
                            <div className="flame flame2"/>


                            <btn id="Play3" onClick={() =>
                                setStart(1)}>
                                Play
                            </btn>

                        </div>
                    </div>


                    <div className="mountains"/>
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

