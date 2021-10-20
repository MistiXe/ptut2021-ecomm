import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

var zz = 6


function App(){
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 5000)
  }, [] )
  var xx =5
  return (
      <div className="App">
        { loading ? (

            <><ClimbingBoxLoader size="30" color={"#36D7B7"} loading={loading} /><h1>Chargement </h1></>

        ) : (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>E-COMM Launcher </h1>
              <button  className = "btn">Créer une partie </button>
              <button className = "btn">Rejoindre une partie</button>
            </header>
        )
        }
      </div>
  );
}

export default App;
