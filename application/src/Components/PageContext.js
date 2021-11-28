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
            morceauContext = <div>morceau 1</div>
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

                <p> - a Commercial Invoice No. 3879 (original and three copies), a full set of original onboard ocean Bill of
                    Lading no. 9965 marked "Freight Collect! </p>

                <p> - B/L: packaging instructions (shirts to be sorted per size and model and packed in plastic bags)

                <p>Freight Forwarder: Asia Freight, P.O. Box 9853, 8 Marunouchi 5-Chame, Chiyoda-ku, Tokyo 100, Japan
                    Asia Freight is responsible for loading boxes on trailer.</p>

                    Ocean booking number 839217/10</p>

                   <p> Goods to be collected in port of destination by DML USA (VAT NUMBER: 3939392), Address New York,
                    New York 2001, USA. Traller number: TYT 2001 JKP</p>
                </div>
                <BsFillArrowLeftSquareFill onClick={() => {
                    if (mContext === 0) {
                        setMContext(6)
                    } else {
                        setMContext((mContext - 1))
                    }
                }}/>
                <BsFillArrowRightSquareFill onClick={() => setMContext((mContext + 1) % 7)}/>
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
                <div>
                    <img src={imageContext} alt="Image Context" className="context"/>
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