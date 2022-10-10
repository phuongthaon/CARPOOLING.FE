import React from "react";
import logo from "./logo.svg";
import "./Test.scss";

function Test() {
  return (
    <div className="Test">
      <header className="Test-header">
        <img src={logo} className="Test-logo" alt="logo" />
        <p>
          Edit <code>src/Test.tsx</code> and save to reload.
        </p>
        <a
          className="Test-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Test;
