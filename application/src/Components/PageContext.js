import React, {useState} from "react";
import {BsCircleFill, BsCircle} from "react-icons/bs";
import {AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai"
import imageContext from "../image/imgContext.jpg";
import imageicon from "../image/ultimateback.jpg";


function PageContext(props) {
    const [page, setPage] = useState(0);
    if (page === 0) {
        return (
            <>
            <div>
                <div className="cardsF">


                    <div className="debile"><h3 className="h3Txt">E-</h3><h3>E-</h3>
                    </div>
                    <div className="contenuTxtT">
                        <h3>First Story >></h3>
                        <h3>First Story >></h3>

                    </div>


                <AiFillLeftCircle onClick={() => setPage(2)}/>
                <AiFillRightCircle onClick={() => setPage((page + 1) % 3)}/>
                <br/>
                <btn onClick={props.retour}>Return</btn>
                <footer>
                    <BsCircleFill/>
                    <BsCircle onClick={() => setPage(1)}/>
                    <BsCircle onClick={() => setPage(2)}/>
                </footer>
            </div>
            </div>
                </>
        );
    } else if (page === 1) {
        return (
            <div>
                <h1>Image Context</h1>
                <div >
                    <img  src={imageContext} alt="Image Context" className="context"/>
                </div>
                <AiFillLeftCircle onClick={() => setPage((page - 1) % 3)}/>
                <AiFillRightCircle onClick={() => setPage((page + 1) % 3)}/>
                <br/>
                <btn onClick={props.retour}>Return</btn>
                <footer>
                    <BsCircle onClick={() => setPage(0)}/>
                    <BsCircleFill/>
                    <BsCircle onClick={() => setPage(2)}/>
                </footer>
            </div>
        );
    } else if (page === 2) {
        return (
            <div>
                <h1>Tutorial</h1>
                <h3>How to play ?</h3>
                <AiFillLeftCircle onClick={() => setPage((page - 1) % 3)}/>
                <AiFillRightCircle onClick={() => setPage((page + 1) % 3)}/>
                <br/>
                <btn onClick={props.retour}>Return</btn>
                <footer>
                    <BsCircle onClick={() => setPage(0)}/>
                    <BsCircle onClick={() => setPage(1)}/>
                    <BsCircleFill/>
                </footer>
            </div>
        );
    }

}

export default PageContext;