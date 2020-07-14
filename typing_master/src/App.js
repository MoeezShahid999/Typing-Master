import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/header/header";
import MainComponent from './Components/MainComponent.js/mainComponent'
function App() {
  return (
    <div className="App">
      <Header />
      <MainComponent/>
    </div>
  );
}

export default App;
