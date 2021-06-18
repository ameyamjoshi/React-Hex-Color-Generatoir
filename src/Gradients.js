import React, { useState } from "react";
import "./Gradients.css";
function Gradients(props) {
  const [button2, setbutton2] = useState("Randomize Colors");
  const [dir, setdir] = useState("to right");
  const [type, settype] = useState("linear-gradient");
  const handlegradientGenerate = () => {
    loadGradients();
  };

  const loadGradients = () => {
    console.log("Loaded");
    let arr1 = [];
    for (var j = 0; j < 20; j++) {
      var arr = [];
      for (var i = 0; i < 2; i++) {
        var color = (Math.random() * 0xfffff * 1000000).toString(16);
        color = "#" + color.slice(0, 6);
        arr.push(color);
      }
      // setgrad(arr);
      // console.log(arr, "1");
      arr1.push(arr);
    }
    console.log(arr1);
    setgrad(arr1);
    setbutton2("Change Colors in gradient");
  };
  const [grad, setgrad] = useState([]);

  return (
    <div>
      <button className="random__button" onClick={handlegradientGenerate}>
        {button2}
      </button>
      {/* <button
        className="random__button"
        style={{ height: "5.5em", width: "5.5em", borderRadius: "50%" }}
        onClick={() => {
          console.log("Set Type=Radial");
          settype("radial-gradient");
        }}
      >
        {type}
      </button> */}
      <button
        className="random__button"
        onClick={() => {
          setdir("to left");
        }}
      >
        To left
      </button>
      <button
        className="random__button"
        onClick={() => {
          setdir("to right");
        }}
      >
        To Right
      </button>
      {grad ? (
        <div className="container__grad">
          {grad.map((grad, index) => (
            <div
              className="gradient__single"
              style={{
                backgroundImage:
                  `${type}` +
                  "(" +
                  `${dir}` +
                  "," +
                  `${grad[0]}` +
                  "," +
                  `${grad[1]}` +
                  ")",
              }}
            >
              <div className="gradient__text">
                backgroundImage: "linear-gradient({dir}, {grad[0]}, {grad[1]}
                )"
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Condition False</h1>
      )}
    </div>
  );
}

export default Gradients;
