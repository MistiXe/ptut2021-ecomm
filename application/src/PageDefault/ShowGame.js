import './showGame.css';



const ShowGame = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (

        <div className={showHideClassName}>
            <section className="main">
                {children}
                <nav>
                    <div className= "logo">
                        <h4>E-COMM</h4>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <button id = "PlayRetour" type="button" onClick={handleClose}>  Tutorial
                            </button>
                        </li>
                        <li>
                            <button id = "PlayRetour" type="button" onClick={handleClose}>  About us
                            </button>
                        </li>

                        <li>
                            <button id = "PlayRetour" type="button" onClick={handleClose}>  Close
                            </button>
                        </li>


                    </ul>



                </nav>




                <header> <h1 id = "DefaultText"> Team Name :  [ADMIN]</h1> <center> <div className= "appletGame"></div></center></header>
                <footer id = "foot"> <h1> E-COMM V_0.1</h1> </footer>

            </section>
        </div>
    );
};
export default ShowGame;