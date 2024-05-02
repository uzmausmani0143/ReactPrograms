import React from "react";
import { render } from "react-dom";
import Myc from "./components/comp1";

function App() {
  return (
    <div>
      <Myc />
    </div>
  );
}

render(<App />, document.getElementById("root"));

export default App;
