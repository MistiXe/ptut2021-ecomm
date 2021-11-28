import React, {useState} from "react";
import {BsCircleFill, BsCircle, BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs";
import {AiFillCaretDown, AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai"
import imageContext from "../image/imgContext.jpg";


function PageContext(props) {
    const [page, setPage] = useState(0);
    const [mContext, setMContext] = useState(0);

    let morceauContext;
    if (page === 0) {
        if (mContext === 0) {
            morceauContext =  <><div className="cardsE">


                <div className="debile">
                </div>
                <div className="contenuTxtT">
                    <h3>1>></h3>
                    <h3>1>></h3>

                </div>

                <div className="info">
                    <h1>The Beginning...</h1>
                    <div>morceau 1</div>

                </div>


            </div></>
        } else if (mContext === 1) {
            morceauContext = <div>morceau 2</div>
        } else if (mContext === 2) {
            morceauContext = <div>morceau 3</div>
        } else if (mContext === 3) {
            morceauContext = <div>morceau 4</div>
        } else if (mContext === 4) {
            morceauContext = <div>morceau 5</div>
        } else if (mContext === 5) {
            morceauContext = <div>morceau 6</div>
        } else if (mContext === 6) {
            morceauContext = <div>morceau 7</div>
        }

        return (
            <>

                <div className="contStep">

                    {morceauContext}
                <BsFillArrowLeftSquareFill onClick={() => {
                    if (mContext === 0) {
                        setMContext(6)
                    } else {
                        setMContext((mContext - 1))
                    }
                }}/>
                <BsFillArrowRightSquareFill onClick={() => setMContext((mContext + 1) % 7)}/>
                <AiFillLeftCircle className="circleBtn" onClick={() => setPage(2)}/>
                <AiFillRightCircle className="circleBtn" onClick={() => setPage((page + 1) % 3)}/>
                <br/>
                <btn onClick={props.retour}>Return</btn>
                <footer>
                    <BsCircleFill/>
                    <BsCircle onClick={() => setPage(1)}/>
                    <BsCircle onClick={() => setPage(2)}/>
                </footer>
            </div>

                </>
        );
    } else if (page === 1) {
        return (
            <div>
                <h1>Image Context</h1>
                <div>
                    <img src={imageContext} alt="Image Context" className="context"/>
                </div>
                <AiFillLeftCircle className="circleBtn" onClick={() => setPage((page - 1) % 3)}/>
                <AiFillRightCircle className="circleBtn" onClick={() => setPage((page + 1) % 3)}/>
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
                <AiFillLeftCircle className="circleBtn" onClick={() => setPage((page - 1) % 3)}/>
                <AiFillRightCircle className="circleBtn" onClick={() => setPage((page + 1) % 3)}/>
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