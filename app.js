import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child1", key: "child1" },             // <-- key added
            [
                React.createElement("h1", { id: "h1_1", key: "h1_1" }, "Heading 1"),
                React.createElement("h2", { id: "h2_1", key: "h2_1" }, "Heading 2"),
            ]
        ),

        React.createElement(
            "div",
            { id: "child2", key: "child2" },             // <-- key added
            [
                React.createElement("h1", { id: "h1_2", key: "h1_2" }, "Heading 1"),
                React.createElement("h2", { id: "h2_2", key: "h2_2" }, "Heading 2"),
            ]
        ),
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
