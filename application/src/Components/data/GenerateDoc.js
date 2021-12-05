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
    {img:cif2, nbRep: 4, reps: ["31 Hinga","Zen Export International", "Japan", "Tokyo"], correctReps: [1,0,3,2]},
    {img:cif3, nbRep: 5, reps: ["New York","USA", "123 Importing Company", "89 High Street","70036"], correctReps: [2,3,0,0,4,1]},
    {img:cif4, nbRep: 9, reps: ["1000 x S, 1000 x M, 1000 x L men's shirt", "30,000 US $", "1 May", "Asia Freigth", "Japan", "12 Boxes", "VAT 3,000 US $","33,000 US $", "2400 kgs"], correctReps: [5,0,4,1,1,6,7,5,8,3,2]}];

const tabAFS = [{img:afse1},{img:afse2},{img:afse3},{img:afse4},
    {img:afsf1},
    {img:afsf2},
    {img:afsf3},
    {img:afsf4},
    {img:afsf5}];

const tabSLI = [{img:slie1},{img:slie2},
    {img:slif1},
    {img:slif2},
    {img:slif3},
    {img:slif4}];

const tabBOL = [{img:bole1},{img:bole2},
    {img:bolf1},
    {img:bolf2},
    {img:bolf3},
    {img:bolf4}];

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export default {tabCI, tabAFS, tabSLI, tabBOL};
