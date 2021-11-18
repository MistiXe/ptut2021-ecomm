import React from "react";


function CreateParty(){
    return(
        <body>
        <section>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>

            <div className="box">
                <div className="container">
                <div className="form">
                    <h2>Airport</h2>
                    <form className="none">
                        <div className="inputBox">
                            <input type="text" placeholder="Username"></input>
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Code"></input>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Take the plane"></input>
                        </div>
                    </form>
                    </div>

                </div>
            </div>
        </section>

        </body>
    )
}

export default CreateParty;