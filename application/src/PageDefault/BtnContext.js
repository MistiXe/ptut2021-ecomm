import React, { Component } from "react";
import ShowContext from "./ShowContext.js";
import qm from "../image/question-mark-on-a-circular-black-background.png";

class BtnContext extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showC = this.showC.bind(this);
        this.hideC = this.hideC.bind(this);
    }

    showC = () => {
        this.setState({ show: true });
    };

    hideC = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>
                <ShowContext show={this.state.show} handleClose={this.hideC}>
                    <p>Contexte de la partie</p>
                </ShowContext>
                <div onClick={this.showC} id="btnTC">
                    <img className="P1-img" src={qm} alt="Tutorial / Context"/><span className="TextHeader">  Tutorial / Context</span>
                </div>
            </main>



        );
    }
}

export default BtnContext;