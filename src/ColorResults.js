import React from "react";
import "./ColorResults.css";
function ColorResults(props) {
  return (
    <div>
      {" "}
      <div className="colors_container">
        {props.hex.map((hex) => (
          <div
            className="display__colors"
            style={{
              backgroundColor: `${hex}`,
            }}
          >
            <div className="color__text">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  fontSize: "1em",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(hex);
                  alert("Copied Color " + hex);
                }}
              >
                {hex}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorResults;
