import React from "react";

function Enter() {
  return (
    <div className="App">
      <div className="heading">
        Enter the Paragraph to test your typing speed
      </div>
      <div className="textarea">
        <textarea
          placeholder="Enter your Paragraph"
          value={para}
          onChange={onChange}
        ></textarea>
        <button className="btn" onClick={clicked}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default Enter;
