import ReactDOM from "react-dom/client"
import Header from "./Header";
import Body_Offline from "./Body_Offline";
import Body_Online from "./Body_Online";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./About";
import ContactUs from "./ContactUs";
import Error from "./Error";
import RestaurantMenuPage from "./RestaurantMenuPage";

const AppLayout = () => {
    return(
        <div>
            <Header/>
            {/* To show layout of children use Outlet.Outlet will be filled according to the children according to the path on which page we are. e.g. If i am at / then Body will be filled in this outlet. 
            If we check the html we will not find the replaced path component. Because Outlet is replaced by the Component. */}
            <Outlet/>
            {/* <Body_Online/> */}

            {/* Handling the children paths */}
            {/* if path = /  */}
            {/* <Body_Online/> */}
            {/* if path = /about */}
            {/* <About/> */}
            {/* if path = /about */}
            {/* <ContactUs/> */}
            {/* <Body_Offline/> */}
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>, 
        children:[
            {
                path: "/", // Path 
                element: <Body_Online/>  // Component / element
                // Load about us page
            },
            {
                path: "/about",
                element: <About/> 
                // Load about us page
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/restaurants/:resId", // Dynamic path => :resId
                element: <RestaurantMenuPage/>
            }
        ],
        errorElement: <Error/>
        // Load my home page
    },
    // { // These are shifted as children above to retain common header and footer.
    //     path: "/about",
    //     element: <About/> 
    // },
    // {
    //     path: "/contact",
    //     element: <ContactUs/>
    // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />)
