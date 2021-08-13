import React from "react";
import TrafficSignal from "./TrafficSignal";
import "./App.css";
import Cars from "./Cars";
// import { useState } from 'react';
// import MyContext from "./context/MyContext";

function App() {
  return (
    <div className="container">
      <Cars />
      <TrafficSignal />
    </div>
  );
}

export default App;
