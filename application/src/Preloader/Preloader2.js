import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

import  * as location from "../image/pre1.json";
import  *  as success from  "../image/pre2.json";


const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

function PreLoader2() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    setData(json);
                    setloading(true);

                    setTimeout(() => {
                        setcompleted(true);
                    }, 4000);
                });
        }, 2000);
    }, []);

    return (
        <>
            {!completed ? (
                <>
                    {!loading ? (
                        <Lottie options={defaultOptions1} height={300} width={300} />
                    ) : (
                        <Lottie options={defaultOptions2} height={300} width={300} />
                    )}
                </>
            ) : (
                <>
                    <h1>Loading Successful ! </h1>
                </>
            )}
        </>
    );
}

export default PreLoader2;