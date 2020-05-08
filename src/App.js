import React, { useEffect } from "react";
import "./App.scss";
import Dex from "./Components/Dex/Dex";

function App() {
  useEffect(() => {
    fetch("http://acnhapi.com/fish/{fishID}").then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <Dex />
    </div>
  );
}

export default App;
