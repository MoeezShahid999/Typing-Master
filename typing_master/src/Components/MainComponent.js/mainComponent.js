import React from "react";
import "./mainComponent.css";

// let elements = splitPara.map((el, ind) => {
//   return <span className={`${el}+${ind}`}>{el} </span>;
// });

const MainComponent = () => {
  const [checkText, setCheckText] = React.useState("");
  const [para, checkPara] = React.useState(
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
  );
  const [time, checkTime] = React.useState("");
  const [timeFlag, checkTimeFlag] = React.useState(false);

  let newPara = para.trim();
  // const splitPara = newPara.split(" ");
  console.log(timeFlag);
  let checkSplitPara = newPara.split(" ");
  let checkElements = checkSplitPara.map((el, ind) => {
    return (
      <span>
        <span key={`${el}-${ind}`} className={`${el}-${ind}`}>
          {el}
        </span>
        <span> </span>
      </span>
    );
  });
  const [elements, setElements] = React.useState(checkElements);
  const check = (e) => {
    switch (e.key) {
      case " ": {
        checkTimeFlag(true);
        let index = checkText.split(" ").length - 1;
        let newElements = [];
        newElements = para
          .trim()
          .split(" ")
          .map((el, ind) => {
            if (
              ind == index &&
              checkText.split(" ")[index] != para.trim().split(" ")[index]
            ) {
              return (
                <span>
                  <span key={`${el}-${ind}`} className={`${el}-${ind} err`}>
                    {el}
                  </span>
                  <span> </span>
                </span>
              );
            } else {
              debugger;
              if (
                elements[ind].props.children[0].props.className.indexOf(
                  "err"
                ) !== -1
              ) {
                if (ind == index) {
                  return (
                    <span>
                      <span key={`${el}-${ind}`} className={`${el}-${ind}`}>
                        {el}
                      </span>
                      <span> </span>
                    </span>
                  );
                } else {
                  return (
                    <span>
                      <span key={`${el}-${ind}`} className={`${el}-${ind} err`}>
                        {el}
                      </span>
                      <span> </span>
                    </span>
                  );
                }
              } else {
                return (
                  <span>
                    <span key={`${el}-${ind}`} className={`${el}-${ind}`}>
                      {el}
                    </span>
                    <span> </span>
                  </span>
                );
              }
              // return (
              //   <span key={`${el}-${ind}`} className={`${el}-${ind}`}>
              //     {el}{" "}
              //   </span>
              // );
            }
          });
        // if (checkText[index] === elements[index]) {
        //   newElements = elements.map((el, ind) => {
        //     if (ind === index) {
        //       return (
        //         <span key={`${el}-${ind}`} className={`${el}-${ind} err`}>
        //           {el}{" "}
        //         </span>
        //       );
        //     } else {
        //       debugger;
        //       if (elements[ind].props.className.indexOf("err") !== -1) {
        //         return (
        //           <span key={`${el}-${ind}`} className={`${el}-${ind} err`}>
        //             {el}{" "}
        //           </span>
        //         );
        //       } else {
        //         return (
        //           <span key={`${el}-${ind}`} className={`${el}-${ind}`}>
        //             {el}{" "}
        //           </span>
        //         );
        //       }
        //     }
        //   });
        // }

        setElements(newElements);

        setCheckText(checkText + e.key);

        break;
      }
      case "Enter": {
        setCheckText(checkText + "\n");
        break;
      }
      case "Backspace": {
        setCheckText(checkText.substr(0, checkText.length - 1));

        break;
      }
      case "Control": {
        break;
      }
      case "Shift": {
        break;
      }
      case "Alt": {
        break;
      }
      case "ArrowRight": {
        break;
      }
      case "ArrowLeft": {
        break;
      }
      case "ArrowDown": {
        break;
      }
      case "ArrowUp": {
        break;
      }
      case "CapsLock": {
        break;
      }
      case "Tab": {
        break;
      }
      default: {
        setCheckText(checkText + e.key);
      }
    }
    // debugger;

    // const ind = checkText.length;
    // const checkEl = checkElements[ind];
    // console.log(checkEl.props.className);
  };
  // debugger


  return (
    <div className="main-component">
      <div className="flex-box">
        <div style={{ letterSpacing: "1.5px", wordSpacing: "5px" }}>
          {elements}
        </div>
        <div>
          <textarea value={checkText} onKeyDown={check} />
          <input onChange = {change}/>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
