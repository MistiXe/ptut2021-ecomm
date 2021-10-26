import React from "react";

const Pages = ({ numPage }) => {
    if(numPage==0) {
        return (
            <div>Page 1</div>
        );
    }
    else if(numPage==1) {
        return (
            <div>Page 2</div>
        );

    }
    else if(numPage==2) {
        return (
            <div>Page 3</div>
        );

    }
};

export default Pages;