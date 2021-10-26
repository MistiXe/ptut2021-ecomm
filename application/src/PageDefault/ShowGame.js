import './showGame.css';
import Main from "../minimal";



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




                <header> <center> <div className= "appletGame"><Main id ="jeu"/></div></center></header>
                <footer id = "foot"> <h1> E-COMM V_0.1</h1> </footer>
                <center><header><div id = "zoneJoueur"></div></header></center>

            </section>
        </div>
    );
};
export default ShowGame;