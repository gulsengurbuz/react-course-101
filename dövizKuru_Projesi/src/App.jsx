import { useState } from "react";

import "./App.css";
import { div } from "three/tsl";
import Currency from "./currency";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Currency />
    </div>
  );
}

export default App;
