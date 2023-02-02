import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
    return (
        <section className="booklist">
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
        </section>
    );
};

const Book = () => {
    return (
        <article className="book">
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

const Author = () => {
    const inlineHeadingStyles = {
        color: "#617d98",
        fontSize: "0.75rem",
        marginTop: "0.5rem",
    };
    return <h4 style={inlineHeadingStyles}>Prince Harry The Duke of Sussex</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
