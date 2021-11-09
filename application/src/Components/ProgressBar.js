function ProgressBar(props){
    const {completed} = props;
    const fillerStyles = {
        width: `${completed*4}%`
    };
    return (
        <div className="pBarContainerStyle">
            <div className="pBarFillerStyle" style={fillerStyles}>
                <span className="pBarLabelStyles">{`${completed} days left`}</span>
            </div>
        </div>
    );

}

export default ProgressBar;