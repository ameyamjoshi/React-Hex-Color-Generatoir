import React, { useState } from "react";
import "./Header.css";
import ColorResults from "./ColorResults";
import Gradients from "./Gradients";

function Header() {
  const [hex, generatehex] = useState([]);
  const [button1, setbutton1] = useState("Generate Colors");
  const [button2, setbutton2] = useState("Generate Gradients");
  const [buttonClicked, setButtonClicked] = useState(0);
  const clickhandler = () => {
    console.log("clicked");
    var arr = [];
    for (var i = 0; i < 20; i++) {
      var color = (Math.random() * 0xfffff * 1000000).toString(16);
      color = "#" + color.slice(0, 6);
      //   console.log(color);
      //   generatehex(color);
      arr.push(color);
    }
    generatehex(arr);
    setbutton1("New Colors");
    setButtonClicked(0);
  };
  const clickhandlergradient = () => {
    console.log("clicked");
    setbutton2("New Gradients");
    generatehex("");
    setButtonClicked(1);
  };
  return (
    <div className="header__container">
      Pick Awesome colors for your designs
      <br></br>
      <button className="generate__button" onClick={clickhandler}>
        {button1}
      </button>
      <button className="generate__button" onClick={clickhandlergradient}>
        {button2}
      </button>
      {hex ? (
        <ColorResults hex={hex} />
      ) : (
        <Gradients buttonClicked={buttonClicked} />
      )}
    </div>
  );
}

export default Header;
