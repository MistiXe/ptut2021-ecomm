import React, {useState} from "react";
import GenerateDoc from "./data/GenerateDoc";
import one from "../image/number-1.png";
import two from "../image/number-2.png";
import three from "../image/number-3.png";
import fourth from "../image/number-four.png";
import five from "../image/number-5.png";
import six from "../image/six.png";

function Formulaire(props) {

    const [pageFormu, setPageFormu] = useState(props.pformu);

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
    const [styleImg, setStyleImg] = useState({
        height: `400px`,
        width: `300px`
    })
    const [styleImgf, setStyleImgf] = useState({
        height: `250px`,
        width: `400px`
    })

    const [styleImgf1, setStyleImgf1] = useState({
        height: `250px`,
        width: `800px`
    })
    const [styleImgf2, setStyleImgf2] = useState({
        height: `50px`,
        width: `800px`
    })
    const [zoom, setZoom] = useState(false);

    const handleZoom = () => {
        if (zoom) {
            setZoom(false);
            setStyleImg({
                height: `400px`,
                width: `300px`
            })
            setStyleImgf(
                {
                    height: `250px`,
                    width: `400px`
                }
            )
            setStyleImgf1(
                {
                    height: `250px`,
                    width: `800px`
                }
            )
            setStyleImgf2(
                {
                    height: `50px`,
                    width: `800px`
                }
            )

        } else {
            setZoom(true);
            setStyleImg({
                height: `650px`,
                width: `475px`,
                marginTop: `-70px`
            })
            setStyleImgf(
                {
                    height: `500px`,
                    width: `800px`
                }
            )
            setStyleImgf1(
                {
                    height: `325px`,
                    width: `1000px`
                }
            )
            setStyleImgf2(
                {
                    height: `75px`,
                    width: `1000px`
                }
            )
        }
    }

    function check(tabRep, formulaire, fragment, lastPage) {
        let estJuste = true;
        let doc;
        switch (formulaire) {
            case "CI":
                doc = GenerateDoc.tabCI
                break;
            case "AFS":
                doc = GenerateDoc.tabAFS
                break;
            case "SLI":
                doc = GenerateDoc.tabSLI
                break;
            case "BOL":
                doc = GenerateDoc.tabBOL
                break;
            case "Mail":
                doc = GenerateDoc.tabMail;
                break;

        }
        for (let i = 0; i < doc[fragment].nbRep; i++) {
            if (tabRep[i] !== doc[fragment].correctReps[i]) {
                estJuste = false
                setTabMR((prevMR) => [
                    ...prevMR,
                    [<div className="divBadRP">{(i + 1).toString()}</div>]
                ]);
            }

        }
        if (estJuste) {
            if (lastPage) {
                props.suivante()
                setPageFormu(0)
                props.setPFormu(0)

            } else {
                if (formulaire === "Mail") {
                    setBox1("")
                    setBox2("")
                    setBox3("")
                    setBox4("")
                    setBox5("")
                }
                setPageFormu(pageFormu + 1)
                props.setPFormu(pageFormu + 1)

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

                        <img className="form1Init" style={styleImg} onClick={handleZoom} src={GenerateDoc.tabCI[0].img}
                             alt="img"/>
                    </div>
                    <button id="next2" onClick={() => {
                        setPageFormu(2);
                        props.setPFormu(2)
                        setZoom(false)
                    }}> Complete the Document
                    </button>
                </>
            );

        } else if (pageFormu === 2) {
            let reps = GenerateDoc.tabCI[2].reps
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

                        <img className="form1Frag1" style={styleImgf} onClick={handleZoom}
                             src={GenerateDoc.tabCI[2].img} alt="img"/>

                    </div>


                    <div className="partFormu">Part A</div>

                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5];
                        check(tabRep, "CI", 2, false);
                    }}>Check
                    </button>

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

                        <img className="form1Frag1" style={styleImgf} onClick={handleZoom}
                             src={GenerateDoc.tabCI[3].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part B</div>

                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4];
                        check(tabRep, "CI", 3, false);
                    }}>Check
                    </button>

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

                        <img className="form1Frag1" style={styleImgf} onClick={handleZoom}
                             src={GenerateDoc.tabCI[4].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part C</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5, box6];
                        check(tabRep, "CI", 4, false);
                    }}>Check
                    </button>
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

                        <img className="form1Frag1" style={styleImgf} onClick={handleZoom}
                             src={GenerateDoc.tabCI[5].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part D</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11];
                        check(tabRep, "CI", 5, true);
                    }}>Check
                    </button>

                </>
            );

        }


    } else if (props.etape === 4) {
        if (pageFormu === 0) {
            let rep = GenerateDoc.tabMail[0].reps
            choix = rep.map((txt) => <option value={txt}>{txt}</option>);
            return (
                <>

                    <div>
                        From:<select
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
                        To:<select
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
                        Date:<select
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
                        Attach:<select
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
                        Subject:<select
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

                    <div className="divemailBG">

                        <div className="divemail">
                            <div className="displaytextemail"><h2><img className="one" src={one} alt="one"/> From:
                            </h2>{box1}</div>
                        </div>
                        <div className="divemail">
                            <div className="displaytextemail"><h2><img className="one" src={two} alt="one"/> To:
                            </h2>{box2}</div>
                        </div>
                        <div className="divemail">
                            <div className="displaytextemail"><h2><img className="one" src={three} alt="one"/> Date:
                            </h2>{box3}</div>
                        </div>
                        <div className="divemail">
                            <div className="displaytextemail"><h2><img className="one" src={fourth} alt="one"/> Attach:
                            </h2>{box4}</div>
                        </div>
                        <div className="divemail">
                            <div className="displaytextemail">
                                <h2><img className="one" src={five} alt="one"/>Subject:<p/></h2>
                                {box5}</div>
                        </div>

                    </div>
                    <div className="partFormu">Part A</div>
                    {tabMR.length===0?<div/>:<div className="divtabans"><p>Bad Answers</p>{tabMR}</div>}
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5];
                        check(tabRep, "Mail", 0, false);
                    }}>Check
                    </button>
                </>
            );
        } else if (pageFormu === 1) {
            let rep = GenerateDoc.tabMail[1].reps
            choix = rep.map((txt) => <option value={txt}>{txt}</option>);
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
                    <div className="divemailBG">

                        <div className="divemail"><img className="one" src={one} alt="one"/> {box1}</div>
                        <div className="divemail"> <img className="one" src={two} alt="one"/>{box2}</div>
                        <div className="divemail"><img className="one" src={three} alt="one"/>{box3}</div>
                        <div className="divemail"><img className="one" src={fourth} alt="one"/> {box4}</div>
                        <div className="divemail"><img className="one" src={five} alt="one"/> {box5}</div>
                        <div  className="divemail"><img className="one" src={six} alt="one"/>{box6}</div>

                    </div>
                    <div className="partFormu">Part B</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5, box6];
                        check(tabRep, "Mail", 1, true);
                    }}>Check
                    </button>

                </>
            );
        }

    } else if (props.etape === 5) {
        if (pageFormu === 0) {
            return (
                <>
                    <div>

                        <img className="form1Init" style={styleImg} onClick={handleZoom} src={GenerateDoc.tabAFS[0].img}
                             alt="img"/>
                        <img className="form1Init" style={styleImg} onClick={handleZoom} src={GenerateDoc.tabAFS[1].img}
                             alt="img"/>
                    </div>
                    <button id="next2" onClick={() => {
                        setPageFormu(4);
                        props.setPFormu(4)
                        setZoom(false)

                    }}> Complete the Document
                    </button>
                </>
            );

        } else if (pageFormu === 4) {
            let reps = GenerateDoc.tabAFS[4].reps
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

                    </div>
                    <div>

                        <img className="form1Frag1" style={styleImgf} onClick={handleZoom}
                             src={GenerateDoc.tabAFS[4].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part A</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
                        check(tabRep, "AFS", 4, false);
                    }}>Check
                    </button>
                </>
            );
        } else if (pageFormu === 5) {
            let reps = GenerateDoc.tabAFS[5].reps
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
                    </div>
                    <div>

                        <img className="form1Frag1" style={styleImgf} onClick={handleZoom}
                             src={GenerateDoc.tabAFS[5].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part B</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3];
                        check(tabRep, "AFS", 5, false);
                    }}>Check
                    </button>
                </>
            );
        } else if (pageFormu === 6) {
            let reps = GenerateDoc.tabAFS[6].reps
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

                        <img className="form1Frag1" style={styleImgf} onClick={handleZoom}
                             src={GenerateDoc.tabAFS[6].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part C</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4];
                        check(tabRep, "AFS", 6, false);
                    }}>Check
                    </button>
                </>
            );
        } else if (pageFormu === 7) {
            let reps = GenerateDoc.tabAFS[7].reps
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

                        <img className="form1Frag1" style={styleImgf} onClick={handleZoom}
                             src={GenerateDoc.tabAFS[7].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part D</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5];
                        check(tabRep, "AFS", 7, false);
                    }}>Check
                    </button>
                </>
            );
        } else if (pageFormu === 8) {
            let reps = GenerateDoc.tabAFS[8].reps
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

                        <img className="form1Frag1" style={styleImgf} onClick={handleZoom}
                             src={GenerateDoc.tabAFS[8].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part E</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4];
                        check(tabRep, "AFS", 8, true);
                    }}>Check
                    </button>
                </>
            );
        }
    } else if (props.etape === 12) {
        if (pageFormu === 0) {
            return (
                <>
                    <div>

                        <img className="form1Init" style={styleImg} onClick={handleZoom} src={GenerateDoc.tabSLI[0].img}
                             alt="img"/>
                    </div>
                    <button id="next2" onClick={() => {
                        setPageFormu(2);
                        props.setPFormu(2)
                        setZoom(false)

                    }}> Complete the Document
                    </button>
                </>
            );
        } else if (pageFormu === 2) {
            let reps = GenerateDoc.tabSLI[2].reps
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

                        <img className="form1Frag1" style={styleImgf1} onClick={handleZoom}
                             src={GenerateDoc.tabSLI[2].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part A</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5, box6];
                        check(tabRep, "SLI", 2, false);
                    }}>Check
                    </button>
                </>
            );
        } else if (pageFormu === 3) {
            let reps = GenerateDoc.tabSLI[3].reps
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

                    </div>
                    <div>

                        <img className="form1Frag1" style={styleImgf1} onClick={handleZoom}
                             src={GenerateDoc.tabSLI[3].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part B</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5, box6, box7];
                        check(tabRep, "SLI", 3, false);
                    }}>Check
                    </button>
                </>
            );
        } else if (pageFormu === 4) {
            let rep = GenerateDoc.tabSLI[4].reps
            choix = rep.map((txt) => <option value={txt}>{txt}</option>);
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
                        <option value={GenerateDoc.tabSLI[4].reps1[0]}>{GenerateDoc.tabSLI[4].reps1[0]}</option>
                        <option value={GenerateDoc.tabSLI[4].reps1[1]}>{GenerateDoc.tabSLI[4].reps1[1]}</option>
                        <option value={GenerateDoc.tabSLI[4].reps1[2]}>{GenerateDoc.tabSLI[4].reps1[2]}</option>
                        <option value={GenerateDoc.tabSLI[4].reps1[3]}>{GenerateDoc.tabSLI[4].reps1[3]}</option>


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
                        <option value={GenerateDoc.tabSLI[4].reps2[0]}>{GenerateDoc.tabSLI[4].reps2[0]}</option>
                        <option value={GenerateDoc.tabSLI[4].reps2[1]}>{GenerateDoc.tabSLI[4].reps2[1]}</option>
                        <option value={GenerateDoc.tabSLI[4].reps2[2]}>{GenerateDoc.tabSLI[4].reps2[2]}</option>
                        <option value={GenerateDoc.tabSLI[4].reps2[3]}>{GenerateDoc.tabSLI[4].reps2[3]}</option>
                        <option value={GenerateDoc.tabSLI[4].reps2[4]}>{GenerateDoc.tabSLI[4].reps2[4]}</option>
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
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>


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
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>

                    </select>

                    </div>
                    <div>

                        <img className="form1Frag1" style={styleImgf1} onClick={handleZoom}
                             src={GenerateDoc.tabSLI[4].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part C</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5, box6, box7];
                        check(tabRep, "SLI", 4, false);
                    }}>Check
                    </button>
                </>
            );
        } else if (pageFormu === 5) {
            let rep = GenerateDoc.tabSLI[5].reps
            choix = rep.map((txt) => <option value={txt}>{txt}</option>);
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
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
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
                        <option value="yes">Yes</option>
                        <option value="No">No</option>


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
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>

                    </select>

                    </div>
                    <div>

                        <img className="form1Frag1" style={styleImgf1} onClick={handleZoom}
                             src={GenerateDoc.tabSLI[5].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part D</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5, box6];
                        check(tabRep, "SLI", 5, true);
                    }}>Check
                    </button>
                </>
            );
        }

    } else if (props.etape === 15) {
        if (pageFormu === 0) {
            return (
                <>
                    <div>

                        <img className="form1Init" style={styleImg} onClick={handleZoom} src={GenerateDoc.tabBOL[0].img}
                             alt="img"/>
                    </div>
                    <button id="next2" onClick={() => {
                        setPageFormu(2);
                        props.setPFormu(2)
                        setZoom(false)

                    }}> Complete the Document
                    </button>
                </>
            );
        } else if (pageFormu === 2) {
            let reps = GenerateDoc.tabBOL[2].reps
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

                        <img className="form1Frag1" style={styleImgf} onClick={handleZoom}
                             src={GenerateDoc.tabBOL[2].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part A</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11];
                        check(tabRep, "BOL", 2, false);
                    }}>Check
                    </button>
                </>
            );
        } else if (pageFormu === 3) {
            let reps = GenerateDoc.tabBOL[3].reps
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

                    </div>
                    <div>

                        <img className="form1Frag1" style={styleImgf} onClick={handleZoom}
                             src={GenerateDoc.tabBOL[3].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part B</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11];
                        check(tabRep, "BOL", 3, false);
                    }}>Check
                    </button>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                </>
            );
        } else if (pageFormu === 4) {
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
                        <option value={GenerateDoc.tabBOL[4].reps[0]}>{GenerateDoc.tabBOL[4].reps[0]}</option>
                        <option value={GenerateDoc.tabBOL[4].reps[1]}>{GenerateDoc.tabBOL[4].reps[1]}</option>

                    </select>

                    </div>
                    <div>

                        <img className="form1Frag1" style={styleImgf2} onClick={handleZoom}
                             src={GenerateDoc.tabBOL[4].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part C</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1];
                        check(tabRep, "BOL", 4, false);
                    }}>Check
                    </button>
                </>
            );
        } else if (pageFormu === 5) {
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
                        <option value={GenerateDoc.tabBOL[5].reps1[0]}>{GenerateDoc.tabBOL[5].reps1[0]}</option>
                        <option value={GenerateDoc.tabBOL[5].reps1[1]}>{GenerateDoc.tabBOL[5].reps1[1]}</option>

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
                        <option value={GenerateDoc.tabBOL[5].reps2[0]}>{GenerateDoc.tabBOL[5].reps2[0]}</option>
                        <option value={GenerateDoc.tabBOL[5].reps2[1]}>{GenerateDoc.tabBOL[5].reps2[1]}</option>
                        <option value={GenerateDoc.tabBOL[5].reps2[2]}>{GenerateDoc.tabBOL[5].reps2[2]}</option>
                    </select>

                    </div>
                    <div>

                        <img className="form1Frag1" style={styleImgf1} onClick={handleZoom}
                             src={GenerateDoc.tabBOL[5].img} alt="img"/>

                    </div>
                    <div className="partFormu">Part D</div>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                    <button id="next2" onClick={() => {
                        setTabMR([]);
                        let tabRep = [box1, box2];
                        check(tabRep, "BOL", 5, true);
                    }}>Check
                    </button>
                    <div className="divtabans"><p>Bad Answers</p>{tabMR}</div>
                </>
            );
        }

    }


}


export default Formulaire;