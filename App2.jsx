import React from "react";
import ReactDOM from "react-dom/client"

const Title = () => (
    <h1 className="head2" tabIndex="5">
        Namaster App2 component
    </h1>
)

// We can create a normal function not necessary to use arrow function, But industry "standard is Arrow Function"
const Title2 = function(){ // as a normal function but we have to return it
    return(
        <h1 className="header">
            Namaste React using JSX
        </h1>
    );
}

// This is an element
const title2 = (
    <h1>
        JSX title2
    </h1>
)

const title = (
    <h1>
        JSX title1
    </h1>
)

const number = 10000;

const ReturnComponent = () => {
    return(
        <div>
            With return
        </div>
    );
}

const HeadingComponent = () => (
    <div>
        {/* Curly braces can be used to run any JS code/ expression  */}
        <h2>{number}</h2>
        <Title/> 
        {/* <Title></Title> It is same as above */}
        <Title2/>
        {Title()}
        {/* Above is also possible to call as a function */}
        {title}
        {title2}
        <ReturnComponent/>
        <h5>Hello function component</h5>
    </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)