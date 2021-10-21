//style
import './PageDefault.css'

//image
import tn from '../image/group.png';

//react
import React, {Component} from "react";

//Components
import BtnContext from "./BtnContext";
import playGame from "./playGame";


class PageDefault extends Component{




    render() {



        return (

            <div id="Test">
                <header>
                <div id="title">E-COMM</div>


                    <div id ="Tutorial" ><BtnContext /></div>
                    <div id ="Jouer" ><playGame /></div>
                    <div id="TeamName">
                        <img className="P1-img" src={tn} alt="Team Name"/><span className="TextHeader">  Team Name</span>
                    </div>
                    <div>



                </div>
                </header>
            </div>

        );
    }

}
export default PageDefault;