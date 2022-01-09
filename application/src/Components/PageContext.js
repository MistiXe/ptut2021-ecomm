import React, {useState} from "react";
import {AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai"
import imageContext from "../image/imgContext.jpg";


function PageContext(props) {
    const [page, setPage] = useState(0);

    let morceauContext;
    if (page === 0) {
        morceauContext = <>
            <div>
                <header className="contextName">Context</header>


                <div className="cardsE" onClick={() => setPage(page+1)}>


                    <div className="debile">
                    </div>
                    <div className="contenuTxtT">
                        <h3>1>></h3>
                        <h3>1>></h3>

                    </div>

                    <div className="info">
                        <h1>The Beginning...</h1>
                        <div>April 20th: The Importer is called 123 Importing Company, 89 High Street, New York, NY
                            70036,
                            USA.
                            It is interested in purchasing 3000 men's cotton shirts from a supplier in Japan, as
                            detailed on
                            Purchase
                            Orders 7689 (1000 red/blue/white shirts in size S and 1000 red/blue/white shirts in size M)
                            and
                            7690
                            (1000 red/blue/white shirts in size L) from a supplier (exporter) called Zen Export
                            International
                            Company, 31 Hinga, Tokyo, Japan.
                        </div>

                    </div>


                </div>
            </div>
        </>
    } else if (page === 1) {
        morceauContext = <>
            <h1 className="contextName">Context</h1>
            <div className="cardsE" onClick={() => setPage(page+1)}>


                <div className="debile">
                </div>
                <div className="contenuTxtT">
                    <h3>2>></h3>
                    <h3>2>></h3>

                </div>

                <div className="info">
                    <h1>Part 2</h1>
                    <div>The value of this purchase is $30,000 plus 10% VAT. Zen Export
                        International Company is responsible for all expenses until the point of shipment, Japan. The
                        commercial invoice number is 3879. The shirts will be packed in boxes of 250 shirts. Each box
                        weighing
                        20 Kg. 123 Importing completes the application for a Commercial Letter of Credit from its bank
                        and is called
                        the applicant; the exporter in Japan, Zen Export International, is called the beneficiary.
                    </div>

                </div>


            </div>
        </>
    } else if (page === 2) {
        morceauContext = <>
            <h1 className="contextName">Context</h1>
            <div className="cardsE" onClick={() => setPage(page+1)}>


                <div className="debile">
                </div>
                <div className="contenuTxtT">
                    <h3>3>></h3>
                    <h3>3>></h3>

                </div>

                <div className="info">
                    <h1>Part 3</h1>
                    <div>The last date for presentation of documents for payment to the bank in Japan is May 15th. The
                        last date
                        for presentation of documents at the bank in New York is May 15th.
                    </div>

                </div>


            </div>
        </>
    } else if (page === 3) {
        morceauContext = <>

            <h1 className="contextName">Context</h1>
            <div className="cardsE" onClick={() => setPage(page+1)}>


                <div className="debile">
                </div>
                <div className="contenuTxtT">
                    <h3>4>></h3>
                    <h3>4>></h3>

                </div>

                <div className="info">
                    <h1>Part 4 : Many Informations</h1>
                    <div>World Wide Bank, International Operations, P.O. Box 144, Grand Street Station, NY, NY 50008,
                        USA
                        Cable address: World Wide Bank, account: 123-987654

                        World Wide Bank/Japan, Central P.O. Box 6789, 5-1 Marunouchi 6-Chome, Chiyoda-ku, Tokyo 100,
                        Japan
                    </div>

                </div>


            </div>
        </>
    } else if (page === 4) {
        morceauContext = <>

            <h1 className="contextName">Context</h1>
            <div className="cardsE" onClick={() => setPage(page+1)}>


                <div className="debile">
                </div>
                <div className="contenuTxtT">
                    <h3>5>></h3>
                    <h3>5>></h3>

                </div>

                <div className="info">
                    <h1>Part 5</h1>
                    <div>Documents to be presented to the confirming bank in Japan:

                        - a Commercial Invoice No. 3879 (original and three copies), a full set of original onboard
                        ocean Bill of
                        Lading no. 9965 marked "Freight Collect!

                        - B/L: packaging instructions (shirts to be sorted per size and model and packed in plastic
                        bags)

                        Freight Forwarder: Asia Freight, P.O. Box 9853, 8 Marunouchi 5-Chame, Chiyoda-ku, Tokyo 100,
                        Japan
                        Asia Freight is responsible for loading boxes on trailer.
                    </div>

                </div>


            </div>
        </>
    } else if (page === 5) {
        morceauContext = <>
            <h1 className="contextName">Context</h1>
            <div className="cardsE">


                <div className="debile">
                </div>
                <div className="contenuTxtT">
                    <h3>6>></h3>
                    <h3>6>></h3>

                </div>

                <div className="info">
                    <h1>Part 6 : In terms...</h1>
                    <div>Ocean booking number 839217/10.

                        Goods to be collected in port of destination by DML USA (VAT NUMBER: 3939392), Address New York,
                        New York 2001, USA. Traller number: TYT 2001 JKP.
                    </div>

                </div>

            </div>
        </>

    } else if (page === 6) {


        morceauContext = <>     <h1 className="contextName">Image Context</h1>
            <div>
                <img src={imageContext} alt="Image Context" className="context"/>
            </div>

        </>

    } else if (page === 7) {
        morceauContext =
            <div>
                <h1 className="contextName">Tutorial</h1>
                <h3>How to play ?</h3>
                <div>
                    <h1>Instructions :</h1>

                    <p>Put the following 17-step procedure into the correct order and complete the necessary
                        documentation where needed by clicking on the different cards.</p>
                </div>
            </div>

    }
    return (
        <>

            <div className="contStep">

                {morceauContext}
                <div className="displayBtnCircle">
                    <AiFillLeftCircle className="circleBtn"
                                      onClick={() => parseInt(page) === 0 ? setPage(7) : setPage(page - 1)}/>

                    <AiFillRightCircle className="circleBtn" onClick={() => setPage((page + 1) % 8)}/>
                    <br/>
                    <button id="Play4" onClick={props.retour}>Play</button>

                    <br/>
                </div>


            </div>

        </>
    );
}

export default PageContext;