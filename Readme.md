ReactJS starting program Episode 1.

NPM is a package manager for Node. js packages, or modules.
NPM is a package manager for the JavaScript programming language.

to make our project use pkg mgr use "npm init" then a package.json is created

package.json is the configuration file for npm

We need bundler to perform task to bundle our app before deploying onto the server. Used for minification, chunking.
Parcel, Vite, Webpack
npm install -D parcel
-D means Dev dependency
Parcel is the web application bundler.

There are 2 types of dependencies that an app can have.
1. Dev dependency - It is required in development phase. e.g Parcel.
2. Normal dependency - It is required in development phase and also required in production also.

~version (tilt) “Approximately equivalent to version”, will automatically update you to all future patch versions that are backwards-compatible, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to < 1.3.0.

^version (caret) “Compatible with version”, will automatically update you to all future minor/patch versions that are backwards-compatible, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to < 2.0.0. It means install the version if there is any minor version there.

package.json keeps the approx version of package.
package-lock.json keep a track of exact version that is being installed.
node-modules is a collection of dependencies. Contains all the code of dependencies.

Transitive dependencies - A dependency can be dependent on other dependencies. So it will install more dependencies in node_modules so this will make node_modules heavy. e.g Parcel

Usually we "don't put" our "node_modules" over the git.
If we have package.json and package-lock.json then we can re-create our node_modules.
Try by deleting node_modules and then in terminal use npm install that will re-create node_modules.
Whatever we can regenerate don't put it on git.

Parcel has created a server when we run the command "npx parcel index.html"
on which our app is running.

npm -> installing a package.
npx -> executing a package.

parcel goes to the source-index.html and build a development build for our app. And it host the development build to a url here in our case http://localhost:1234

installing React on our project as a Package and avoid CDN links which is obsolete and not preferred. It is a costly operation due to network operations.

npm i and npm install is same thing.

import React from "react"; 
"react" is defined in node_modules

# Parcel
- It has created Dev Build
- It has created a Local Server
- It id doing HMR = Hot Module Replacement <br> (means as soon as we update our page data and save, then it is updates/ reloads the page/data or automatically refreshes our page)
- Uses File Watching Algorithm - written in C++
- While refreshing it takes very less time to update page this is due to Caching for Faster Builds
- It also Optimizes the Image (Image Optimization)
- If we create a production build it Minifies the files (Minification)
- Does Bundling
- Compresses the file (removes white spaces)
- Consistent Hashing 
- Code Splitting
- Differential Bundling - To Support older browser
  - Configure in package.json
  -   "browserslist": [
    "last 2 Chrome version",
    "last 2 firefox version",
    "last 2 versions"
  ]
  - "last 2 versions" for all the browser backward compatibility [Compatibility](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)
- Diagnostic
- Error Handling
- It can also host on HTTPS
- Tree Shaking - remove unused code
- It has different dev and prod bundles

Creating a production build - npx parcel build index.html
note to remove main: "App.jsx" when creating a build

After executing the code - npx parcel index.html parcel will create a dev build and load files from the dist folder, and when reload uses parcel-cache folder.

In Production build it is created in dist.
When creating Prod build we will get 3 files index.html, css, js. Even if we have 100 files we will get 3 files only and we can uplaod it on production.

We don't upload node_modules over the server instead we use npm install. And node_modules at local and server is different. It has it's own dist folder.
We don't need npx parcel index.html at our server.

-----------------------------------------------

# Shorthand Scripts
Creating npm scripts to avoid dev mode or prod mode command writing.
- Within package.json use any key name and write value as the code without npx keyword
  "scripts": {
    "dev" : "parcel index.html", 
    "prod" : "parcel build index.html ",
    "test": "jest"
  },
- run command by
  npm run dev
  npm run prod 
"npm dev" is equivalent to "npm run dev" 

Just like DOM element e.g HTML, TITLE, H! tags we've React element.
React element is an object.
When we render React element onto DOM then it becomes an HTML.
React.createElement => ReactElement (JS-Object) => HTMLElement(rendered)
Element is rendered on ReactDOM.
If there is a bug in our code use the it must show something else.
<div id="root">
    <h1>Not Rendered</h1>
</div>

JSX is a syntax.
JSX is not React.
JSX is not html inside JS file.
JSX combines html and javascript code into a single file.
It is Html and js mix.
JSX is html like syntax. Looks like html. or xml like syntax
There is no class in jSX use className, that will be converted to class by babel. Mostly we use CamelCase in jsx attributes.
Various attributes in JSX tags.

const jsxheading = <h1>This is JSX</h1>; // This is an element
JSX in single line is valid but with multiple lines we need to wrap in paranthesis(<h1>ASDFGHJKL</h1>)
It can be said it is not valid JS.
JS engine doesn't understand this code instead it understands ecma script.
This code is transpiled before it reaches to the JS engine.
Transpile means the code is converted to the code the Browser understands.
It is transpiled by Parcel.
Transpile is done by Babel package inside Parcel.

"Babel" is a JS compiler/ Transpiler.
Conversion of JSX using BABEL as below.
JSX => (Babel transpiles it to) React.createElement => ReactElement (JS-Object) => HTMLElement(rendered)
Babel uses AST and convert the code token by token. 

------------------------
A fuctional component is a normal js function which returns some piece of JSX element.
There is no need to write to use return in function component. Just use paranthesis. and the jsx/html code.
e.g.
const MyComponent = () => (
  <div>
    <h1>Happy coding</h1>
  </div>
)

To render a component we use opening/closing tags
root.render(<MyComponent/>);
To render an element we use direct element name.
root.render(jsxheading);
Babel get to know about Component using Angular brackets.
Always use arrow function in Function component.
Inside JSX we can use {} curly braces and we can write any kind of JS code.

------------------------------------------------------
Component composition - Adding a component within a component

Suppose if there is an API that sends malicious code and in our laptop we access it. And tht script is able to run JS code in our app and system. This can steal cookies, storage etc. This is called Cross Site Scripting.

JSX takes care of these injection attacks. It will sanitize your data and helps to save us from attacks.

Our code is readable because of JSX.

----------- inline css in JSX ----------------
- Use braces.
<div id="res-card" style={{width: 10px}}>

- Call the object
const styleCards = {
  backgroundColor: "yellow"
}
<div id="res-card" style={styleCards}>

---------------------------------
Dynamically passing data in a component we will use props

----------------------------------------
Config driven UI -> Ui driven by config

When components at same level that we looped, these components their ids should be uniquely represented.
If a new res came in and came at the first place or any place so react-dom will have to insert the comp at the first place or any place. if no id given the react will not know at what place we hae to put the new card. So react will render all the cards. 
If we give uniqueue id to everyone so react will know that these ids already exists so it will render only that id card. This may affect the performance.

If tjhere were no id an new res cart cma ein so react will render all these items/ cards or render all the restaurnats.

If we use index as the key- it is logically correct but react says don't use index as keys bad practice.
----------------------

In one file we can not have multiple default exports.
To export multiple things data use "named export".

React is fast in DOM manipulation. To make UI layer and Data layer work in sync. This is due to VDOM. React only does DOM manipulation.
This kind of syncing can be done using State Variable - using react hook called React State.

React uses "Reconfiliation Algorithm" also known "React Fiber". (Episonde 5 last)
This started from React 16. It is called as React Fiber.
Whenever we have existing UI (unchanged) React creates a Virtual DOM, (not an actual DOM).
Acual dom are the tags e.g. div, image etc in tree form.
VDOM is representation of actual DOM.
VDOM is actually React elements; that is in form of object. e.g console.log(<Body/>) prints object.
React treats React object as JS object.

Diff Algorithm
It finds out the difference b/w 2 VDOMs. That is - the Updated and Previous VDOM.
e.g. Old has 7 items and New has 3 items.
When there is any change in UI/data a new object is formed. It calculates the difference b/w the two and update the actual DOM.
React is fast because it does efficient DOM manipulation. Because it has a virtual DOM. React can find out the difference bw virtual DOMs and update the UI.
as soon as setter of useState is called React starts it Reconcilliation algo. Starts rerendering of page.

React is popular bc it renders very fast.

# React hook
- React hook is a normal js utility function.
- useState() - Superpowerful react variable 
  - In the background it is a named export so we need braces for this.
  - When a state variable changes react is rerendering the component.
  - Whenever state variable changes react will rerender the component where state   variable changed. and update all the values in the component.
  - If there is any change in the component then the Whole component is rendered.
  - Why we have a const variable in useState and const is getting updated?
  - This is because every time the component is rendered, the whole function (Component) is called and the new variable is called and this new variable is different than the previous variable. Means there will be 2 variable of VDOMs and will be diff'ed and only the changes is seen rendered.
  - Whenever you change a local state variable React rerenders the component. For example if we are type in input field and (e.target.value) is getting texts then in that case we have a rendering or reconfiliation process takes place means on every text input the component is getting rerendering.
Never create useState in if/else.
Never create useState inside a function.
- Always define hooks at the top of functional component body.

# Monolith Architecture
In monolith architectue we have all our services like API, UI, Auth, DB, SMS api etc. at the same place. And changing it is more complex. 

# Microservice Architecture
We have different services for different jobs.
Backend Service
UI project - Our UI microservice is written in React.
Auth service
Database
SMS sending service
Email notifications
These independent are combined together to form a big app.
Separation of cencern.
Single responsibility.

How these services interact with each other?
Just  like our React UI runs on localhost:1234 others run on their own ports. At the end all these ports can be mapped to domain name.
e.g.
for UI  -> /
Backend -> /api
SMS     -> /SMS

How React app will contact to the other api world?
There are 2 ways--
Way 1 - page loads -> make API call (Takes 500ms) -> Render the page
Way 2 - Page loads -> Render the UI -> Make API Call -> Render the data at page.

2nd way provide better UX.

# useEffect
useEffect is called when the render cycle of Component is finished.
useEffect(() => 
  {console.log("useEffect called");
}, []);
It has arrow/ callback function with dependency comman separated.
Dependency array is not mandatory only callback funtion is mandatory.
- No dependency array (Not present) => useEffect is called on every render. (Default behaviour)
- Empty dependency array ([]) => useEffect is called on only initial render (just once).
- Something(value) in dependency [value] => Called everytime "value" is updated. It will only be called when dependency changes. e.g. login value changes login to logout vice versa.


CORS - Calling an API from localhost has been blocked by our browser according to CORS policy. from one origin to another origin.

How to get rid of CORS?
Use cors extention. (Allow CORS)
corsproxy.io

------------------------Routing ---------------
use npm i react-router-dom
To create routes create routing configuration first.
Create it in Base component. e.g. App.js
import { createBrowserRouter } from "react-router-dom";
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/> 
        errorElement: <Error/>
        // Load my home page
    }]);

createBrowserRouter -> configuration means what will happen on specific path / url.
- It takes a list of path
- provide the configuration to render it.using {RouterProvider}. RouterProvider provides the configuration to our app.
- use like root.render(<RouterProvider router={appRouter} />)
- If we have error then we can show a custom page using errorElement
- React router gives us access to a hook called {useRouteError} and we can use this on our error page "const err = useRouteError();" and access the items err.status etc
- Children routes -> e.g keeping the header and footer intact and changing the body of the page. To use this add children: ["add child paths"] paths. And push the paths in returned components.

- Link is using anchor tag behind the code. It is wrapper over anchor tag. When we create a link then React Router keep track of the Home that is a link and we don't have to refresh the page. 

This is client side routing.

































