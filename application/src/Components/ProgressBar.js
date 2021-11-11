import React from "react";

function ProgressBar(props) {
    const {completed} = props;
    const fillerStyles = {
        width: `${completed * 4}%`
    };

    if (({completed}) < 10) {
        return (<div className="pBarContainerStyle">
            <div className="pBarFillerStyle2" style={fillerStyles}>
                <span className="pBarLabelStyles">{`${completed} days left`}</span>
            </div>
        </div>)
    } else {
        return (
            <div className="pBarContainerStyle">
                <div className="pBarFillerStyle" style={fillerStyles}>
                    <span className="pBarLabelStyles">{`${completed} days left`}</span>
                </div>
            </div>
        );

    }
}

export default ProgressBar;