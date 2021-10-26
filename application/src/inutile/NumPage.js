import React, {Component} from "react";
import Pages from "./Pages"

class NumPage extends Component {
    constructor() {
        super();
        this.state = {
            page: 1
        };
        this.showP1 = this.showP1.bind(this);
        this.showP2 = this.showP2.bind(this);
        this.showP3 = this.showP3.bind(this);
        this.showPlus = this.showPlus.bind(this);
    }
    showP1 = () => {
        this.setState({page: 0});
    };
    showP2 = () => {
        this.setState({page: 1});
    };
    showP3 = () => {
        this.setState({page: 2});
    };
    showPlus = () => {
        let np = (this.state.page+1)%3;
        this.setState({page: np});
    };

    render() {
        return (

            <>
            <Pages numPage = {this.state.page} />
                <div onClick={this.showP1}> 1</div><div onClick={this.showP2}> 2</div><div onClick={this.showP3}>3</div><div onClick={this.showPlus}>+</div>
            </>


    );
    }
}

export default NumPage;