import React, { useState } from "react";

export default function TextForm(props) {
    const justUpperClick = () => {
        // console.log("UpperCase Was Clicked" + text);
        let newTaxt = text.toUpperCase();
        setText(newTaxt);
    };
    const justloClick = () => {
        // console.log("UpperCase Was Clicked" + text);
        let newTaxt = text.toLowerCase();
        setText(newTaxt);
    };
    const justClearClick = () => {
        // console.log("UpperCase Was Clicked" + text);
        let newTaxt = "";
        setText(newTaxt);
    };
    const justOnChange = (event) => {
        // console.log("justOnChange");
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    // text="new text"; // wrong way to change the state
    //setText("new text");//correct way to change the stase
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label"></label>
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={justOnChange}
                        id="mybox"
                        rows="8"
                    ></textarea>
                </div>
                <button
                    className="btn btn-success mx-3"
                    onClick={justUpperClick}
                >
                    Convart To UpperCase
                </button>
                <button className="btn btn-primary mx-3" onClick={justloClick}>
                    Convart To LowerCase
                </button>
                <button
                    className="btn btn-danger mx-3"
                    onClick={justClearClick}
                >
                    Convart To Clear
                </button>
            </div>
            <div className="container mb-3">
                <h1>Your Text summary</h1>
                <p className="textdanger">
                    <b>
                        {" "}
                        {text.split(" ").length} Word And {text.length}{" "}
                        Characters;
                    </b>
                </p>
                <p>{0.008 * text.split(" ").length} Minutes Read;</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
