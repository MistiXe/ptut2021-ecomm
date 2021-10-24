import React, { Component } from "react";
import ShowGame from "./ShowGame.js";
import qm from "../image/question-mark-on-a-circular-black-background.png";

class BtnJouer extends Component {
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
                <ShowGame show={this.state.show} handleClose={this.hideC}>
                </ShowGame>
                <div onClick={this.showC} id="btnTC">
                   <btn>Jouer
                       <footer className= "footerVersion">E-COMM V_0.1</footer></btn>
                </div>
            </main>



        );
    }
}
export default BtnJouer;