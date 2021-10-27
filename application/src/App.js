import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, Component} from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import Main from "./threadGame";


function App(){
    const [start, setStart] = useState(false);
    const useState1 = useState(false);
    const [loading, setLoading] = useState1;
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }, [])
    let page;
    if(loading){
        page = <><ClimbingBoxLoader size="30" color={"#36D7B7"} loading={loading}/><h1>Loading...</h1></>;
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