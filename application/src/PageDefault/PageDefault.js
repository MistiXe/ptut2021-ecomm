//style
import './PageDefault.css'

//image
import tn from '../image/group.png';

//react
import React, {Component} from "react";

//Components
import BtnContext from "./BtnContext";


class PageDefault extends Component{


    render() {
        return (
            <div className="Page1">
                <header>
                <div id="title">E-COMM</div>
                <div className="ButtonInfo">

                    <BtnContext />
                    <div id="TeamName">
                        <img className="P1-img" src={tn} alt="Team Name"/><span className="TextHeader">  Team Name</span>
                    </div>
                    <div>

                    </div>

                </div>
                </header>
            </div>
        );
    }

}
export default PageDefault;