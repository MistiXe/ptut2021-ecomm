import './showGame.css'

const ShowContext = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="main">
                {children}
                <button id= "Play-btn" type="button" onClick={handleClose}>
                    Suivant
                </button>
            </section>
        </div>
    );
};

export default ShowContext;