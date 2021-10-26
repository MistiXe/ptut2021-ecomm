import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, Component} from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import BtnJouer from "./PageDefault/BtnJouer";


function App(){
      const useState1 = useState(false);
      const [loading, setLoading] = useState1;
      useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)

        }, 5000)
      }, [])

      return (
          <div className="App">
            {loading ? (

                <><ClimbingBoxLoader size="30" color={"#36D7B7"} loading={loading}/><h1>Loading...</h1></>

            ) : (
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h1>E-COMM Launcher </h1>
                  <BtnJouer />
                  <button id ="Play" onClick={() => alert("<<Créer une partie >> is not available.")} className="btn">Create a party</button>
                </header>

            )
            }
          </div>
      );
    }


export default App;

