import React from "react";
import "./App.css";
import AdviceButton from "./components/AdviceButton";
import AdviceSlip from "./components/AdviceSlip";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AdviceButton />
        <AdviceSlip />
      </header>
    </div>
  );
}

export default App;
