import React from "react";
import "./App.css";
import AdviceButton from "./components/AdviceButton";
import oracle from "./oracle.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="oracle" src={oracle} />
        <AdviceButton />
      </header>
    </div>
  );
}

export default App;
