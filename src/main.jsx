import "./index.css"; // Make sure styles are loaded
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes"; // Import the routes configuration

// Create the router instance using createBrowserRouter
const router = createBrowserRouter(routes);

// Get the root element where your React app will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the RouterProvider, which will handle routing based on the defined routes
root.render(
  <RouterProvider router={router} />
);
