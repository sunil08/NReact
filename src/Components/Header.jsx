import { useEffect, useState } from "react";
import { APP_LOGO_URL } from "../Utils/constants";
import { Link } from "react-router";

const Header = () => {

    const [loggedInText, setLoggedInText] = useState("Login");
    console.log("Full Component Rendered");

    useEffect(()=> {
        console.log("Header useState")
    },[loggedInText])

    return(
    <div id="header">
        <div>
            <img id="logo" src={APP_LOGO_URL} alt="Icon - Hotel Food Delivery Service@clipartmax.com"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link> 
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    {/* <a  href="/about">About Us</a> */}
                    <Link to="/about">About Us</Link>
                </li>
                <li>Cart</li>
                <button className="login" onClick={() => {
                    loggedInText === "Login"
                    ? setLoggedInText("Logout")
                    : setLoggedInText("Login")}}>{loggedInText}</button>
            </ul>
        </div>
    </div>
)}

export default Header;


// Never use anchor tag to navigate to new page bc it reloads the whole page. Instead use Link component. It works same as anchor tag but changes the component only.

// With single page application - we don't change the page and never refresh the page when we switch from on page to other. Browser will not reload the website. via client side routing.

// 2 types of routing 
// 1. Client side routing - Client-side routing is a technique used in web development, particularly in Single-Page Applications (SPAs), to manage navigation and URL changes entirely within the client's browser using JavaScript, without requiring a full page reload from the server for each navigation event. No network calls is made and all the componnent is loaded from the loaded project only. This only happens when we make a network call from the api. This is how Single page apps work SPAs.

// 2. Server side routing -Server-side routing refers to the process where the server determines which content to deliver to the client based on the incoming URL request. When a user navigates to a new page or clicks a link in a traditional web application, the browser sends a request to the server for the corresponding URL. It reloads the whole page, send reqest to Aboutus.html, fetches that html and this happens when clicking on anchor tag link.

