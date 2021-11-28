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
                <div className="contStep">
                <div className="cardsE">


                    <div className="debile">
                    </div>
                    <div className="contenuTxtT">
                        <h3>1>></h3>
                        <h3>1>></h3>

                    </div>

                    <div className="info">
                        <h1>The Beginning...</h1>

                        <p>

                            <p>April 20th: The Importer is called 123 Importing Company, 89 High Street, New York, NY 70036, USA.{"\n"}</p>

                            <p> It is interested in purchasing 3000 men's cotton shirts from a supplier in Japan, as detailed on Purchase{"\n"}
                                Orders 7689 <p>(1000 red/blue/white shirts in size S and 1000 red/blue/white shirts in size M) and 7690 {"\n"}
                                    (1000 red/blue/white shirts in size L) from a supplier (exporter) called Zen Export International </p>
                                <p>Company, 31 Hinga, Tokyo, Japan. </p></p>


                        </p>
                    </div>

                </div>

                <div className="btnSwitch">
                <AiFillLeftCircle className="circleBtn"onClick={() => setPage(2)}/>
                    <AiFillRightCircle className="circleBtn"onClick={() => setPage((page + 1) % 3)}/></div>
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
                <AiFillLeftCircle className="circleBtn"onClick={() => setPage((page - 1) % 3)}/>
                <AiFillRightCircle className="circleBtn"onClick={() => setPage((page + 1) % 3)}/>
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