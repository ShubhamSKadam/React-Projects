import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL600_SR600,400_.jpg"
      alt="Spare"
    />
  );
};

const Title = () => {
  return <h2>Spare</h2>;
};

const Author = () => <h4>Prince Harry The Duke of Sussex</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
