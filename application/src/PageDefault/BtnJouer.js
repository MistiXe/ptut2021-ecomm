import React, { Component } from "react";
import ShowGame from "./ShowGame.js";
import './showGame.css';
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
            <body id ="btnJouer">
                <ShowGame show={this.state.show} handleClose={this.hideC}>
                </ShowGame>

                   <btn id ="Play-btn" onClick={this.showC} >
                       Jouer
                      </btn>

            </body>

        );
    }
}
export default BtnJouer;