import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", 
    {id: "heading", xyz: "abc"}, 
    "Hello world from React!");

// React.createElement is not creating HTML instead it is creating an object.    

console.log(heading); // It prints the object here    

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(heading); 
// Takes the object and take h1 tag that browser understands and put that inside the root.
// Render object takes the h1 tag and convert it and put it into the dom to render.


{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
</div> */}

{/* ReactElement(Object) = HTML(Brow ser Understands) */}

// const parent = React.createElement("div", { id: "parent" }, [
// React.createElement("div", { id: "child" }, [
// React.createElement("h1", {}, "I'm.an h1.tag"),
// React.createElement("h2", {}, "I'm an h2 tag"),
// ]),
// React.createElement("div", { id: "child2" }, [
// React.createElement("h1", {}, "I'm-an-h1 tag"),
// React.createElement("h2", {}, "I'm an h2 tag"),
// ]),
// ]);

// To avoid too much of complexity we have JSX
// React is only written using JSX