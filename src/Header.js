import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [hex, generatehex] = useState([]);
  const [button1, setbutton1] = useState("Generate Colors");
  const [button2, setbutton2] = useState("Generate Gradients");
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
  };
  const clickhandlergradient = () => {
    console.log("clicked");
    setbutton2("New Gradients");
    generatehex("");
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
        <div className="colors_container">
          {hex.map((hex) => (
            <div
              className="display__colors"
              style={{
                backgroundColor: `${hex}`,
              }}
            >
              <div className="color__text">{hex}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>Display Gradients here </div>
      )}
    </div>
  );
}

export default Header;
