import React, {useState} from "react";


function BtnContext(props) {
    const[show, setShow] = useState(false)

    if(show===false) {
            return (<main>
                <button id="PlayRetour" type="button" onClick={() => setShow(true)}>Context
                </button>
            </main>);

    }else if(show===true){

        return (<div className="modal display-block">
                <section className="main">
                <button id= "Play-btn" type="button" onClick={() => setShow(false)}>
                    Suivant
                </button>
            </section>
        </div>)
    }


}

//

export default BtnContext;