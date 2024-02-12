import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// importing redux stuff
import store from "./fetures/store.js";
import { Provider } from "react-redux";

// importing router stuff
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// importing components stuff
import Hero from "./components/Hero/Hero.jsx";

// importing Screens stuff
import { Register, Login, Profile } from "./Screens/index.js";
import PrivateRoute from "./components/Private/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />

      {/* private routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
