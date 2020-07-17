import React from "react";

function Enter(props) {
  const [para, setPara] = React.useState("");
  const onChange = (e) => {
    setPara(e.target.value);
  };

  const clicked = () => {
    if (para.length > 40) {
      props.click(para);
    } else {
      alert("The paragraph should have at least 40 characters");
    }
  };
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
