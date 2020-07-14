import React from "react";
import "./mainComponent.css";
const para =
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';
const newPara = para.trim();
// const splitPara = newPara.split(" ");
const checkSplitPara = newPara.split("");
const checkElements = checkSplitPara.map((el, ind) => {
  return <span className={`${el}+${ind}`}>{el} </span>;
});

// let elements = splitPara.map((el, ind) => {
//   return <span className={`${el}+${ind}`}>{el} </span>;
// });

const MainComponent = () => {
  const [checkText, setCheckText] = React.useState("");

  const check = (e) => {
    setCheckText(e.target.value);
    const ind = checkText.length;
    const checkEl = checkElements[ind];
    console.log(checkEl.props.className);
  };

  return (
    <div className="main-component">
      <div className="flex-box">
        <div>{checkElements}</div>
        <div>
          <textarea value={checkText} onChange={check} />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
