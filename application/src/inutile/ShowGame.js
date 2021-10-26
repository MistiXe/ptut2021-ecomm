import './showGame.css';
import Main from "../threadGame";
import BtnContext from "../PageDefault/BtnContext";



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
                            <BtnContext />
                        </li>
                        <li>
                            <button id = "playTuto" type="button" onClick={handleClose}>
                            </button>
                        </li>

                        <li>
                            <button id = "PlayRetour" type="button" onClick={handleClose}>  Close
                            </button>
                        </li>


                    </ul>



                </nav>




                <footer id = "foot"> <h1> E-COMM V_0.1</h1> </footer>


            </section>
        </div>
    );
};
export default ShowGame;