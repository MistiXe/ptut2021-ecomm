import logo from './image/world.png';
import './App.css';
import React, {useState, useEffect} from 'react';
import Main from "./threadGame";
import PreLoader2 from "./Preloader/Preloader2";


function App(){
    const [start, setStart] = useState(false);
    const useState1 = useState(false);
    const [loading, setLoading] = useState1;
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 4500)
    }, [])
    let page;
    if(loading){

        page = <>
            <PreLoader2 />

        </>;
    }
    else if(!start){
        page = (<header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>E-COMM Launcher </h1>
            <btn id ="Play" onClick={() => setStart(true)} >
                Jouer
            </btn>
            <button id ="Play" onClick={() => alert("<<Créer une partie >> is not available.")} className="btn">Create a party</button>
        </header>)
    }
    else {
        page = <Main />
    }
    return (
        <div className="App">
            {page}
        </div>
    );
}


export default App;