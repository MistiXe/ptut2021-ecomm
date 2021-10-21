import React, { Component } from "react";
import ShowPlayGame from "./ShowPlayGame";
import qm from "../image/question-mark-on-a-circular-black-background.png";

class playGame extends Component {
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
                <ShowPlayGame show={this.state.show} handleClose={this.hideC}>
                    <p>Jouer Solo</p>
                </ShowPlayGame>
                <div onClick={this.showC} id="btnTC">
                    <img className="P1-img" src={qm} alt="Play Solo"/><span className="TextHeader"> Play Solo</span>
                </div>
            </main>



        );
    }
}

export default playGame;