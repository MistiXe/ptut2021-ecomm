import React from 'react';

//import Commercial invoice documents
import cie1 from '../image/docs/ci/Commercial_Invoice.png';
import cie2 from '../image/docs/ci/Commercial_Invoice_0.PNG';
import cif1 from '../image/docs/ci/Commercial_Invoice_0.PNG';
import cif2 from '../image/docs/ci/Commercial_Invoice_0.PNG';
import cif3 from '../image/docs/ci/Commercial_Invoice_0.PNG';
import cif4 from '../image/docs/ci/Commercial_Invoice_0.PNG';

//import Application for issuing Letter of Credit documents
import afse1 from '../image/docs/afs/Application for issuing 1.png';
import afse2 from '../image/docs/afs/Application for issuing 2.png';
import afse3 from '../image/docs/afs/Application for issuing PT1.png';
import afse4 from '../image/docs/afs/Application_for_issuing_PT1.png';
import afsf1 from '../image/docs/afs/Application_for_issuing_1.png';
import afsf2 from '../image/docs/afs/Application_for_issuing_2.png';
import afsf3 from '../image/docs/afs/Application_for_issuing_3.png';
import afsf4 from '../image/docs/afs/Application_for_issuing_4.png';
import afsf5 from '../image/docs/afs/Application_for_issuing_5.png';

//import Shipper's letter of instruction documents
import slie1 from '../image/docs/sli/Shipper\'s Letter Instruction.png';
import slie2 from '../image/docs/sli/Shipper\'s_Letter_Instruction_0.png';
import slif1 from '../image/docs/sli/Shipper\'s_Letter_Instruction_1.png';
import slif2 from '../image/docs/sli/Shipper\'s_Letter_Instruction_2.png';
import slif3 from '../image/docs/sli/Shipper\'s_Letter_Instruction_3.png';
import slif4 from '../image/docs/sli/Shipper\'s_Letter_Instruction_4.png';


//import Bill of Lading documents
import bole1 from '../image/docs/bol/Bill of lading.png';
import bole2 from '../image/docs/bol/Bill_of_lading_0.png';
import bolf1 from '../image/docs/bol/Bill_of_lading_1.png';
import bolf2 from '../image/docs/bol/Bill_of_lading_2.png';
import bolf3 from '../image/docs/bol/Bill_of_lading_3.png';
import bolf4 from '../image/docs/bol/Bill_of_lading_4.png';

//Creating arrays for each document
const tabCI = [{id: 1,type:'e',img:cie1},{id: 2,type:'e',img:cie2},{id: 3,type:'f',img:cif1},{id: 4,type:'f',img:cif2},{id: 5,type:'f',img:cif3},{id: 6,type:'f',img:cif4}];
const tabAFS = [{id: 1,type:'e',img:afse1},{id: 2,type:'e',img:afse2},{id: 3,type:'e',img:afse3},{id: 4,type:'e',img:afse4},{id: 5,type:'f',img:afsf1},{id: 6,type:'f',img:afsf2},{id: 7,type:'f',img:afsf3},{id: 8,type:'f',img:afsf4},{id: 9,type:'f',img:afsf5}];
const tabSLI = [{id: 1,type:'e',img:slie1},{id: 2,type:'e',img:slie2},{id: 3,type:'f',img:slif1},{id: 4,type:'f',img:slif2},{id: 5,type:'f',img:slif3},{id: 6,type:'f',img:slif4}]
const tabBOL = [{id: 1,type:'e',img:bole1},{id: 2,type:'e',img:bole2},{id: 3,type:'f',img:bolf1},{id: 4,type:'f',img:bolf2},{id: 5,type:'f',img:bolf3},{id: 6,type:'f',img:bolf4}]

export default {tabCI, tabAFS, tabSLI, tabBOL};
