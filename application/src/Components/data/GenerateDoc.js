import React from 'react';

//import Commercial invoice documents
import cie1 from '../../image/docs/ci/Commercial_Invoice.png';
import cie2 from '../../image/docs/ci/Commercial_Invoice_0.png';
import cif1 from '../../image/docs/ci/Commercial_Invoice_1.PNG';
import cif2 from '../../image/docs/ci/Commercial_Invoice_2.PNG';
import cif3 from '../../image/docs/ci/Commercial_Invoice_3.PNG';
import cif4 from '../../image/docs/ci/Commercial_Invoice_4.PNG';

//import Application for issuing Letter of Credit documents
import afse1 from '../../image/docs/afs/Application for issuing 1.png';
import afse2 from '../../image/docs/afs/Application for issuing 2.png';
import afse3 from '../../image/docs/afs/Application for issuing PT1.png';
import afse4 from '../../image/docs/afs/Application_for_issuing_PT1.png';
import afsf1 from '../../image/docs/afs/Application_for_issuing_1.png';
import afsf2 from '../../image/docs/afs/Application_for_issuing_2.png';
import afsf3 from '../../image/docs/afs/Application_for_issuing_3.png';
import afsf4 from '../../image/docs/afs/Application_for_issuing_4.png';
import afsf5 from '../../image/docs/afs/Application_for_issuing_5.png';

//import Shipper's letter of instruction documents
import slie1 from '../../image/docs/sli/Shipper\'s Letter Instruction.png';
import slie2 from '../../image/docs/sli/Shipper\'s_Letter_Instruction_0.png';
import slif1 from '../../image/docs/sli/Shipper\'s_Letter_Instruction_1.png';
import slif2 from '../../image/docs/sli/Shipper\'s_Letter_Instruction_2.png';
import slif3 from '../../image/docs/sli/Shipper\'s_Letter_Instruction_3.png';
import slif4 from '../../image/docs/sli/Shipper\'s_Letter_Instruction_4.png';


//import Bill of Lading documents
import bole1 from '../../image/docs/bol/Bill of lading.png';
import bole2 from '../../image/docs/bol/Bill_of_lading_0.png';
import bolf1 from '../../image/docs/bol/Bill_of_lading_1.png';
import bolf2 from '../../image/docs/bol/Bill_of_lading_2.png';
import bolf3 from '../../image/docs/bol/Bill_of_lading_3.png';
import bolf4 from '../../image/docs/bol/Bill_of_lading_4.png';

//Creating arrays for each document
const tabCI = [{img:cie1},{img:cie2},
    {img:cif1,nbRep:5 ,correctReps:["04/20/XX","3879","7689/7690","FOB","Commercial"],reps:shuffle(["FOB","Commercial","04/20/XX","7689/7690","3879"])},
    {img:cif2, nbRep: 4, reps: shuffle(["31 Hinga","Zen Export International", "Japan", "Tokyo"]), correctReps: ["Zen Export International","31 Hinga","Tokyo","Japan"]},
    {img:cif3, nbRep: 6, reps: shuffle(["New York","USA", "123 Importing Company", "89 High Street","70036"]), correctReps: ["123 Importing Company","89 High Street","New York","New York","70036","USA"]},
    {img:cif4, nbRep:   11, reps: shuffle(["1000 x S, 1000 x M, 1000 x L men's shirt", "30,000 US $", "1 May", "Asia Freigth", "Japan", "12 Boxes", "VAT 3,000 US $","33,000 US $", "2400 kgs"]), correctReps: ["12 Boxes","1000 x S, 1000 x M, 1000 x L men's shirt","Japan","30,000 US $","30,000 US $","VAT 3,000 US $","33,000 US $","12 Boxes","2400 kgs","Asia Freigth","1 May"]}];

const tabAFS = [{img:afse1},{img:afse2},{img:afse3},{img:afse4},
    {img:afsf1, nbRep:9,correctReps:["World Wide Bank, International Operations, P.O. Box 144, Grand Street Station, NY, NY 50008, USA","World Wide Bank", "World Wide Bank/Japan, Central P.O.Box 6789, 5-1Marunouchi 6-Chome, Chiyoda-ku, Tokyo 100, Japan","123 Importing Company", "89 High Street, New York", "NY 70036, USA", "Zen Export International Company", "31 Hinga", "Tokyo, Japan"], reps: shuffle(["World Wide Bank, International Operations, P.O. Box 144, Grand Street Station, NY, NY 50008, USA","World Wide Bank", "World Wide Bank/Japan, Central P.O.Box 6789, 5-1Marunouchi 6-Chome, Chiyoda-ku, Tokyo 100, Japan","123 Importing Company", "89 High Street, New York", "NY 70036, USA", "Zen Export International Company", "31 Hinga", "Tokyo, Japan"])},
    {img:afsf2, nbRep:3, correctReps: ["US $ 30,000 Thirty Thousand Dollars US","05/15/XX","05/15/XX"], reps:shuffle(["US $ 30,000 Thirty Thousand Dollars US","05/15/XX"])},
    {img:afsf3, nbRep:4, correctReps: ["3000 men's cotton shirts as detailed on Purchase Orders 7689 and 7690","FOB","three","FREIGHT COLLECT"], reps:shuffle(["3000 men's cotton shirts as detailed on Purchase Orders 7689 and 7690","FOB","three","FREIGHT COLLECT"])},
    {img:afsf4, nbRep:5, correctReps: ["Japanese port","New York", "04/30/XX","Prohibited","Prohibited"], reps:shuffle(["Japanese port","New York", "04/30/XX","Prohibited"])},
    {img:afsf5, nbRep:4, correctReps: ["World Wide Bank","123-987654","123 Importing", "APRIL 20 XXXX"], reps:shuffle(["World Wide Bank","123-987654","123 Importing", "APRIL 20 XXXX"])}];

const tabSLI = [{img:slie1},{img:slie2},
    {img:slif1, nbRep:6, correctReps:["Asia Freight", "P.O.Box 9853, 8 Marunouchi 5-Chrome","Tokyo","100","Japan","Tokyo"], reps:shuffle(["Asia Freight", "P.O.Box 9853, 8 Marunouchi 5-Chrome","Tokyo","100","Japan"])},
    {img:slif2, nbRep:7, correctReps:["123 Importing","89 High Street","New York","New York","70036","USA","New York"], reps:shuffle(["123 Importing","89 High Street","70036","USA","New York"]) },
    {img:slif3, nbRep:7, correctReps: [""], reps:shuffle([])},
    {img:slif4, nbRep:6}];

const tabBOL = [{img:bole1},{img:bole2},
    {img:bolf1, nbRep:11, correctReps:["**/**","9965","Asia Freight","P.O.Box 9853, 8 Marunouchi 5-Chrome","Tokyo 100 Japan","123 Importing Company","89 High Street","New York, New York 70036, USA","DML USA, New York, New York 2001, USA","TYT 2001 JKP","3939392"], reps:shuffle(["**/**","9965","Asia Freight","P.O.Box 9853, 8 Marunouchi 5-Chrome","Tokyo 100 Japan","123 Importing Company","89 High Street","New York, New York 70036, USA","DML USA, New York, New York 2001, USA","TYT 2001 JKP","3939392"])},
    {img:bolf2, nbRep:9, correctReps: ["7689 / 7690","12","2400 kgs","shirts to be sorted per size and model and packed in plastic bags","12","12","boxes","2400 kgs","3000 men's shirts"], reps:shuffle(["7689 / 7690","12","2400 kgs","shirts to be sorted per size and model and packed in plastic bags","boxes","3000 men's shirts"])},
    {img:bolf3,nbRep:1},
    {img:bolf4, nbRep:2}];

function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export default {tabCI, tabAFS, tabSLI, tabBOL};
