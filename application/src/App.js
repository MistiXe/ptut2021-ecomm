import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, Component} from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import BtnJouer from "./inutile/BtnJouer";
import Main from "./minimal";


function App(){
      const useState1 = useState(false);
      const [loading, setLoading] = useState1;
      useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)

        }, 2000)
      }, [])

      return (
          <div className="App">
            {loading ? (

                <><ClimbingBoxLoader size="30" color={"#36D7B7"} loading={loading}/><h1>Loading...</h1></>

            ) : (
                <Main />

            )
            }
          </div>
      );
    }


export default App;

