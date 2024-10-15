import React from "react"; // Imports React to use JSX syntax and React features
import ReactDOM from "react-dom/client"; // Imports ReactDOM for rendering React components to the DOM
import "./index.css"; // Imports the global CSS file to apply styling across the app
import App from "./App"; // Imports the main `App` component

// Creates a root DOM element where the React app will be rendered, using the element with the id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renders the `App` component within the `root` element in strict mode
root.render(
  <React.StrictMode>
    {/* The StrictMode component helps in highlighting potential problems in an application, 
    such as deprecated or unsafe lifecycle methods. */}
    <App />
  </React.StrictMode>
);
