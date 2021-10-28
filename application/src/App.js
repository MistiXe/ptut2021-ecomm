import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, Component} from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import Main from "./threadGame";
import './animation.scss';


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
        page = <>
            <svg>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="name"/>
                        <feColorMatrix in="name" mode="matrix" values="1 0 0 0 0
                                                       0 1 0 0 0
                                                       0 0 1 0 0
                                                       0 0 0 15 -10" result="b"/>

                        <feBlend in="SourceGraphic" in2="b"/>
                    </filter>
                </defs>
            </svg>

            <div className="wrapper">
                <div id="container">
                    <p className="text">Loading</p>
                    <div className="drop"></div>
                </div>
            </div>








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