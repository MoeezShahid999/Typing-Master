import React from "react";
import "./newComponent.css";
class NewComponent extends React.Component {
  state = {
    val: "",
    time: 0,
    para: "",
    timeFlag: false,
    elements: "",
    spans: [],
    result: false,
    interval: null,
    correctWords: 0,
    textarea: true,
  };
  componentDidMount = () => {
    debugger;
    let x = "";
    for (let i = 0; i < this.props.para.length; i++) {
      if (i > 0) {
        if (!(" " === this.props.para[i] && this.props.para[i - 1] === " ")) {
          if (this.props.para[i] != "\n") {
            x = x + this.props.para[i];
          }
        }
      } else {
        if (this.props.para[i] != "\n") {
          x = x + this.props.para[i];
        }
      }
    }
    this.setState({
      elements: x.trim().split(" "),
      para: x.trim(),
      spans: x
        .trim()
        .split(" ")
        .map((el, ind) => {
          return (
            <span key={`${el}-${ind}`} className={`${el}-${ind}`}>
              {el}{" "}
            </span>
          );
        }),
    });
  };

  change = (e) => {
    this.setState({ val: e.target.value });
    if (e.target.value == "") {
      this.setState({
        spans: this.state.elements.map((el, ind) => {
          return (
            <span key={`${el}-${ind}`} className={`${el}-${ind}`}>
              {el}{" "}
            </span>
          );
        }),
      });
    }
  };
  handleKeyDown = (e) => {
    if (!this.state.timeFlag) {
      this.setState({
        timeFlag: true,
      });
      const interval = setInterval(() => {
        this.setState({
          time: this.state.time + 1,
        });
      }, 1000);
      this.setState({
        interval: interval,
      });
      // setInterval(() => {
      //   setTime(time + 1);
      // }, 1000);
    }
    if (e.key == " " || e.key == "Enter") {
      const splitVal = this.state.val.split(" ");
      const index = splitVal.length - 1;
      this.setState({
        spans: this.state.elements.map((el, ind) => {
          if (ind == index && el != splitVal[index]) {
            return (
              <span key={`${el}-${ind}`} className={`${el}-${ind} err`}>
                {el}{" "}
              </span>
            );
          } else {
            if (
              ind != index &&
              this.state.spans[ind].props.className.indexOf("err") != -1
            ) {
              return (
                <span key={`${el}-${ind}`} className={`${el}-${ind} err`}>
                  {el}{" "}
                </span>
              );
            } else {
              return (
                <span key={`${el}-${ind}`} className={`${el}-${ind}`}>
                  {el}{" "}
                </span>
              );
            }
          }
        }),
      });
    }
  };
  submit = () => {
    debugger;
    if (this.state.val.split(" ").length > 1) {
      this.setState({
        result: true,
      });

      clearInterval(this.state.interval);
      this.setState({
        result: true,
        textarea: false,
      });
      const splitVal = this.state.val.split(" ");
      let correct = 0;
      this.state.elements.map((el, ind) => {
        debugger;
        if (el === splitVal[ind]) {
          correct++;
        }
      });
      this.setState({
        correctWords: correct,
      });
    } else {
      alert("You can not submit without completing one word");
    }
  };
  close = () => {
    this.setState({
      result: false,
    });
  };
  render() {

    return (
      <div>
        {this.state.result ? (
          <div className="result-container">
            <h2 style={{ textAlign: "center" }}>Result</h2>
            <div className="result">
              <div className="result-row">
                <div className="result-heading">Time</div>
                <div className="result-desc">{this.state.time}</div>
              </div>
              <div className="result-row">
                <div className="result-heading">Speed</div>
                <div className="result-desc">
                  {this.state.val.split(" ").length / (this.state.time / 60) ==
                  Infinity
                    ? "Null"
                    : this.state.val.split(" ").length /
                      (this.state.time / 60)}{" "}
                  WPM
                </div>
              </div>
              <div className="result-row">
                <div className="result-heading">Total Words</div>
                <div className="result-desc">{this.state.elements.length}</div>
              </div>
              {/* <div className="result-row">
                <div className="result-heading">Number of Errors</div>
                <div className="result-desc">1</div>
              </div> */}
              <div className="result-row">
                <div className="result-heading">Number of Correct words</div>
                <div className="result-desc">{this.state.correctWords}</div>
              </div>
            </div>
            <div className="btn-box">
              <button
                style={{
                  color: "blue",
                  backgroundColor: "white",
                  border: "1px solid black",
                  outline: "none",
                  cursor: "pointer",
                  padding: "5px",
                  width: "100px",
                }}
                onClick={this.props.restart}
              >
                Try Again
              </button>{" "}
              <button
                style={{
                  color: "red",
                  backgroundColor: "white",
                  border: "1px solid black",
                  outline: "none",
                  cursor: "pointer",
                  padding: "5px",
                  width: "100px",
                }}
                onClick={this.close}
              >
                Close
              </button>
            </div>
          </div>
        ) : null}

        <div className="new-component">
          <div className="para">{this.state.spans}</div>
          <textarea
            disabled={!this.state.textarea}
            placeholder="Write from here"
            value={this.state.val}
            onKeyDown={this.handleKeyDown}
            onChange={this.change}
            style = {{fontSize:'16px'}}
          ></textarea>
        </div>

        <button className="new-btn btn" onClick={this.submit}>
          Submit
        </button>
      </div>
    );
  }
}

export default NewComponent;
