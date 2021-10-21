import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';


function App(){
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 5000)
  }, [] )
  return (
      <div className="App">
        { loading ? (

            <><ClimbingBoxLoader size="30" color={"#36D7B7"} loading={loading} /><h1>Loading </h1></>

        ) : (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>E-COMM Launcher </h1>
              <button  onClick={() => alert("test")} className = "btn">Create a party </button>
              <button className = "btn">Join a party</button>
            </header>
        )
        }
      </div>
  );
}

export default App;
