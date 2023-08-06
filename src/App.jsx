import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Table from "./components/Table/Table";

function App() {
  return (
    <>
      <Navigation />
      <div className="main-section">
        <Table />
      </div>
    </>
  );
}

export default App;
