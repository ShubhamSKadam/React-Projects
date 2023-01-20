import React from "react";
import ReactDOM from "react-dom/client"; // new version syntax in react 18

const Greeting = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
};

const Person = () => <h2>My name is Shubham Kadam</h2>;
const Message = () => {
  return <p>I love programming</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
