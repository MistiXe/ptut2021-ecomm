import React, {useState} from "react";
import {BsCircleFill, BsCircle} from "react-icons/bs";
import {AiFillRightCircle} from "react-icons/ai"
import imageContext from "../image/imgContext.jpg";


function PageContext(props) {
    const [page, setPage] = useState(0);
    if (page === 0) {
        return (
            <div>
                <h1>Context</h1>
                <div>April 20th: The Importer is called 123 Importing Company, 89 High Street, New York, NY 70036, USA.

                    It is interested in purchasing 3000 men's cotton shirts from a supplier in Japan, as detailed on Purchase
                    Orders 7689 (1000 red/blue/white shirts in size S and 1000 red/blue/white shirts in size M) and 7690
                    (1000 red/blue/white shirts in size L) from a supplier (exporter) called Zen Export International
                    Company, 31 Hinga, Tokyo, Japan. The value of this purchase is $30,000 plus 10% VAT. Zen Export
                    International Company is responsible for all expenses until the point of shipment, Japan. The
                    commercial invoice number is 3879. The shirts will be packed in boxes of 250 shirts. Each box weighing
                    20 Kg

                    123 Importing completes the application for a Commercial Letter of Credit from its bank and is called
                    the applicant; the exporter in Japan, Zen Export International, is called the beneficiary.

                    The last date for presentation of documents for payment to the bank in Japan is May 15th. The last date
                    for presentation of documents at the bank in New York is May 15th.

                    World Wide Bank, International Operations, P.O. Box 144, Grand Street Station, NY, NY 50008, USA
                    Cable address: World Wide Bank, account: 123-987654

                    World Wide Bank/Japan, Central P.O. Box 6789, 5-1 Marunouchi 6-Chome, Chiyoda-ku, Tokyo 100,
                    Japan

                    Documents to be presented to the confirming bank in Japan:

                    - a Commercial Invoice No. 3879 (original and three copies), a full set of original onboard ocean Bill of
                    Lading no. 9965 marked "Freight Collect!

                    - B/L: packaging instructions (shirts to be sorted per size and model and packed in plastic bags)

                    Freight Forwarder: Asia Freight, P.O. Box 9853, 8 Marunouchi 5-Chame, Chiyoda-ku, Tokyo 100, Japan
                    Asia Freight is responsible for loading boxes on trailer.

                    Ocean booking number 839217/10

                    Goods to be collected in port of destination by DML USA (VAT NUMBER: 3939392), Address New York,
                    New York 2001, USA. Traller number: TYT 2001 JKP
                </div>
                <AiFillRightCircle onClick={() => setPage((page + 1) % 3)}/>
                <br/>
                <btn onClick={props.retour}>Return</btn>
                <footer>
                    <BsCircleFill/>
                    <BsCircle/>
                    <BsCircle/>
                </footer>
            </div>
        );
    } else if (page === 1) {
        return (
            <div>
                <h1>Image Context</h1>
                <div>
                    <img src={imageContext} alt="Image Context"/>
                </div>
                <AiFillRightCircle onClick={() => setPage((page + 1) % 3)}/>
                <br/>
                <btn onClick={props.retour}>Return</btn>
                <footer>
                    <BsCircle/>
                    <BsCircleFill/>
                    <BsCircle/>
                </footer>
            </div>
        );
    } else if (page === 2) {
        return (
            <div>
                <h1>Tutorial</h1>
                <h3>How to play ?</h3>
                <AiFillRightCircle onClick={() => setPage((page + 1) % 3)}/>
                <br/>
                <btn onClick={props.retour}>Return</btn>
                <footer>
                    <BsCircle/>
                    <BsCircle/>
                    <BsCircleFill/>
                </footer>
            </div>
        );
    }

}

export default PageContext;