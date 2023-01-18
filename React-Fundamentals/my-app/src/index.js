import React from "react";
import ReactDOM from "react-dom/client"; // new version syntax in react 18

const Greeting = () => {
  return <h1>My First Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
