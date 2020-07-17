import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/header/header";
import NewComponent from "./Components/newComponent/newComponent";
import Enter from "./Components/para/enter";
function App() {
  const [show, setShow] = React.useState(false);
  const [para, setPara] = React.useState("");
  const startShow = (para) => {
    setPara(para);
    setShow(true);
  };
  const restart = ()=>{
    setPara('');
    setShow(false);
  }
  return (
    <div >
      <Header />
      {!show ? <Enter click={startShow} /> : <NewComponent restart = {restart} para = {para}/>}
    </div>
  );
}

export default App;
