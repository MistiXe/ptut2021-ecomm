import React, { Component } from "react";
import ShowContext from "./ShowContext.js";


class BtnContext extends Component {
    constructor() {
        super();
        this.state = {
            show: true
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
                <button id = "PlayRetour" type="button" onClick={this.showC}>Context
                </button>
            </main>



        );
    }
}

export default BtnContext;