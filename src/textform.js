import React, { useState } from "react";

function Textform(props) {
  const handleUpclick = () => {
    // console.log("Uppercase" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text coverted to Uppercase", "success");
  };
  const handleLowclick = () => {
    // console.log("Uppercase" + text);
    let Lowertext = text.toLowerCase();
    setText(Lowertext);
    props.showAlert("Text coverted to Lowercase", "success");
  };
  const handleOnchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleclearclick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };
  const handlecopyclick = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard", "success");
  };
  const handleextraclick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed from text", "success");
  };
  // const handlecapitalizeclick = () => {
  //   // let text = document.getElementById("mybox");
  //   // let value = text.value;
  //   let word = text.split(" ");
  //   let lower = word.toLowerCase();
  //   let newtext = lower.charAt(0).toUpperCase() + lower.slice(1);
  //   setText(newtext);
  // };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="form">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#34447d" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleUpclick}
        >
          Covert to Upercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleLowclick}
        >
          Covert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleclearclick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handlecopyclick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleextraclick}
        >
          Remove Extra Spaces
        </button>
        {/* <button
          className="btn btn-primary my-3 mx-3"
          onClick={handlecapitalizeclick}
        >
          Capitalize Case
        </button> */}
      </div>
      <div className="summary">
        <h2>Your Text Summary</h2>
        <p>
          {text.length} characters and{" "}
          {
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words
        </p>
        <h2>Text preview</h2>
        <p>
          {text.length > 0 ? text : "Enter Something Above To Preview Here"}
        </p>
      </div>
    </>
  );
}

export default Textform;
