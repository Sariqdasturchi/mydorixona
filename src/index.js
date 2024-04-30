import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './components/login/login';
import HomeCont from './components/home/home';
import Profile from './components/profil/profile';
import Save from './components/save/save';
import Add from './components/add/add';
import Days from './components/days/day';
import HomeMenu from './components/home_menu/homeMenu';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "home",
    element: <HomeCont />
  },
  {
    path: "profile",
    element: <Profile />
  },
  {
    path: "save",
    element: <Save />
  },
  {
    path: "add",
    element: <Add />
  },
  {
    path: "day",
    element: <Days />
  },
  {
    path: "menu-home",
    element: <HomeMenu />
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

