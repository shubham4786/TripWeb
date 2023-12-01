import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";

function App() {
  return (
    <div style={{ background: "#eff1f3" }}>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
