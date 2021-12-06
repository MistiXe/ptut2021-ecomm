import React, {useState} from "react";
import GenerateDoc from "./data/GenerateDoc";


function Formulaire(props) {
    const [pageFormu, setPageFormu] = useState(5);//Faut utiliser ça pour changer de morceaux de formulaire
    const [tabMR, setTabMR] = useState([]);
    const [box1, setBox1] = useState("");
    const [box2, setBox2] = useState("");
    const [box3, setBox3] = useState("");
    const [box4, setBox4] = useState("");
    const [box5, setBox5] = useState("");
    const [box6, setBox6] = useState("");
    const [box7, setBox7] = useState("");
    const [box8, setBox8] = useState("");
    const [box9, setBox9] = useState("");
    const [box10, setBox10] = useState("");
    const [box11, setBox11] = useState("");

    function check(tabRep, formulaire, fragment, lastPage) {
        let estJuste = true;
        switch (formulaire) {
            case "CI":

                for (let i = 0; i < GenerateDoc.tabCI[fragment].nbRep; i++) {
                    if (tabRep[i] !== GenerateDoc.tabCI[fragment].correctReps[i]) {
                        estJuste = false
                        setTabMR((prevMR) => [
                            ...prevMR,
                            [(i + 1).toString()]
                        ]);
                    }
                }
        }
        if (estJuste) {
            if (lastPage) {
                props.suivante()
                setPageFormu(0)
            } else {
                setPageFormu(pageFormu + 1)
            }
        } else {
            props.erreur()
        }
    }

    let choix
    if (props.etape === 2) {
        if (pageFormu === 0) {
            return (
                <>
                    <div>

                        <img className="form1Init" src={GenerateDoc.tabCI[0].img} alt="img"/>
                    </div>
                    <button id="next2" onClick={() => setPageFormu(2)}> Complete the Document</button>
                </>
            );

        } else if (pageFormu === 2) {
            let reps = GenerateDoc.tabCI[4].reps
            choix = reps.map((txt) => <option value={txt}>{txt}</option>);
            return (
                <>

                    <div>
                        1<select
                        className="custom-select"
                        value={box1}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox1(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}

                    </select>
                        2<select
                        className="custom-select"
                        value={box2}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox2(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        3<select
                        className="custom-select"
                        value={box3}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox3(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        4<select
                        className="custom-select"
                        value={box4}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox4(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        5<select
                        className="custom-select"
                        value={box5}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox5(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}

                    </select>

                    </div>
                    <div>

                        <img className="form1Frag1" src={GenerateDoc.tabCI[2].img} alt="img"/>

                    </div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5];
                        check(tabRep, "CI", 2, false);
                    }}>Check
                    </button>
                    <div><p>Bad answers are : </p>{tabMR}</div>
                </>
            );
        } else if (pageFormu === 3) {
            let reps = GenerateDoc.tabCI[3].reps
            choix = reps.map((txt) => <option value={txt}>{txt}</option>);
            return (
                <>

                    <div>
                        1<select
                        className="custom-select"
                        value={box1}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox1(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}

                    </select>
                        2<select
                        className="custom-select"
                        value={box2}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox2(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        3<select
                        className="custom-select"
                        value={box3}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox3(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        4<select
                        className="custom-select"
                        value={box4}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox4(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                    </div>
                    <div>

                        <img className="form1Frag1" src={GenerateDoc.tabCI[3].img} alt="img"/>

                    </div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4];
                        check(tabRep, "CI", 3, false);
                    }}>Check
                    </button>
                    <div><p>Bad answers are : </p>{tabMR}</div>
                </>
            );

        } else if (pageFormu === 4) {
            let reps = GenerateDoc.tabCI[4].reps
            choix = reps.map((txt) => <option value={txt}>{txt}</option>);
            return (
                <>

                    <div>
                        1<select
                        className="custom-select"
                        value={box1}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox1(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}

                    </select>
                        2<select
                        className="custom-select"
                        value={box2}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox2(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        3<select
                        className="custom-select"
                        value={box3}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox3(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        4<select
                        className="custom-select"
                        value={box4}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox4(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        5<select
                        className="custom-select"
                        value={box5}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox5(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}

                    </select>
                        6<select
                        className="custom-select"
                        value={box6}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox6(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}

                    </select>

                    </div>
                    <div>

                        <img className="form1Frag1" src={GenerateDoc.tabCI[4].img} alt="img"/>

                    </div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5, box6];
                        check(tabRep, "CI", 4, false);
                    }}>Check
                    </button>
                    <div><p>Bad answers are : </p>{tabMR}</div>
                </>
            );
        } else if (pageFormu === 5) {

            let reps = GenerateDoc.tabCI[5].reps
            choix = reps.map((txt) => <option value={txt}>{txt}</option>);
            return (
                <>

                    <div>
                        1<select
                        className="custom-select"
                        value={box1}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox1(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}

                    </select>
                        2<select
                        className="custom-select"
                        value={box2}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox2(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        3<select
                        className="custom-select"
                        value={box3}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox3(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        4<select
                        className="custom-select"
                        value={box4}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox4(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        5<select
                        className="custom-select"
                        value={box5}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox5(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}

                    </select>
                        6<select
                        className="custom-select"
                        value={box6}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox6(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}

                    </select>
                        7<select
                        className="custom-select"
                        value={box7}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox7(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        8<select
                        className="custom-select"
                        value={box8}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox8(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        9<select
                        className="custom-select"
                        value={box9}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox9(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}
                    </select>
                        10<select
                        className="custom-select"
                        value={box10}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox10(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}

                    </select>
                        11<select
                        className="custom-select"
                        value={box11}
                        onChange={(e) => {
                            const selectedE = e.target.value;
                            setBox11(selectedE);
                        }}
                    >
                        <option value=""/>
                        {choix}

                    </select>

                    </div>
                    <div>

                        <img className="form1Frag1" src={GenerateDoc.tabCI[5].img} alt="img"/>

                    </div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5,box6, box7, box8, box9, box10,box11];
                        check(tabRep, "CI", 5, true);
                    }}>Check
                    </button>
                    <div><p>Bad answers are : </p>{tabMR}</div>
                </>
            );

        }


    } else if (props.etape === 4) {
        //email exercice
        return (
            <div><img className="divForm1" alt="img" src={GenerateDoc.tabCI[0].img}/></div>

        );

    } else if (props.etape === 5) {
        //Application for issuing Letter of Credit (document super long et donc differents des autres)
        return (
            <div><img className="divForm1" alt="img" src={GenerateDoc.tabAFS[0].img}/></div>

        );

    } else {
        //Les autres documents qu'on peut normalement traiter de la même manière
        return (
            <div onClick={props.suivante}>Next</div>
        );

    }


}

export default Formulaire;