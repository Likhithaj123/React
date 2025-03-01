
    // const heading = React.createElement("h1", {}, "hello world from react!");

    // const root = ReactDOM.createRoot(document.getElementById("root"));

    // root.render(heading);



    const parent = React.createElement("div", {id: "parent"}, [
        React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "Hello, world!"),
        React.createElement("p", {}, "This is a paragraph"),

    ]),
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "Hello, world!"),
        React.createElement("p", {}, "This is a paragraph"),

    ])
]);
