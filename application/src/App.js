
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

          <div className="contenuTxt">

              <h3>COMM</h3>
              <h3>COMM</h3>
              <div className= "contenuTxt2"><h3 className="h3Txt">E-</h3><h3>E-</h3>
              </div>
          </div>
           <div className="textpresentation"> <p>You want to practice ? This game is for you :)</p></div>


            <btn id ="Play" onClick={() => setStart(true)} >
                Play
            </btn>

            <button id ="Play" onClick={() => alert("<<Créer une partie >> is not available.")} className="btn">Create a party</button>

        </header>
        )
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