// const heading = React.createElement('h1', {}, "Hello Javascript");
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

// parent div
const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        // child1
        React.createElement(
            "div",
            { id: "child1" },
            [
                React.createElement("h1", { id: "heading_1" }, "Heading 1"),
                React.createElement("h2", { id: "heading_2" }, "Heading 2")
            ]
        ),

        // child2
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement("h1", { id: "heading_1" }, "Heading 1"),
                React.createElement("h2", { id: "heading_2" }, "Heading 2")
            ]
        )
    ]
);

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);