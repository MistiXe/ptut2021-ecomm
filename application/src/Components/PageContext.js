import React, {useState} from "react";
import {FiChevronRight} from "react-icons/fi";
import {BsCircleFill, BsCircle} from "react-icons/bs";
import {AiFillRightCircle} from "react-icons/ai"


function PageContext(props){
   const [page, setPage] = useState(0);
   if(page===0){
       return (
           <div>
               <div>Context page 1</div>
               <FiChevronRight onClick={() => setPage((page+1)%3)}/>
               <AiFillRightCircle onClick={() => setPage((page+1)%3)}/>
               <br/>
               <btn onClick={props.retour}>Return</btn>
               <footer>
                   <BsCircleFill />
                   <BsCircle />
                   <BsCircle />
               </footer>
           </div>
       );
   }
   else if (page===1){
       return (
           <div>
               <div>Context page 2</div>
               <FiChevronRight onClick={() => setPage((page+1)%3)}/>
               <AiFillRightCircle onClick={() => setPage((page+1)%3)}/>
               <br/>
               <btn onClick={props.retour}>Return</btn>
               <footer>
                   <BsCircle />
                   <BsCircleFill />
                   <BsCircle />
               </footer>
           </div>
       );
   }
   else if (page===2) {
       return (
           <div>
               <div>Context page 3</div>
               <FiChevronRight onClick={() => setPage((page+1)%3)}/>
               <AiFillRightCircle onClick={() => setPage((page+1)%3)}/>
               <br/>
               <btn onClick={props.retour}>Return</btn>
               <footer>
                   <BsCircle />
                   <BsCircle />
                   <BsCircleFill />
               </footer>
           </div>
       );
   }

}
export default PageContext;