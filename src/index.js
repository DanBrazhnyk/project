import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainMenu from './Pages/MainPage';
import Todo from './Pages/todo_list/Todo';
import Voting from "./Pages/voting/components/Voting"
import UserList from './Pages/list_users/components/ListUsers';
import Contacts from "./Pages/contacts/components/Contacts"
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store/Store';
import  Login  from './Pages/login/Login';
import PrivateRoute from './privateRoute/PrivateRoute';
import Registration from "./registration/Registration";
import ForgotPassword from './forgotPassword/ForgotPassword';
import Home from './Pages/home/Home';
const router = createHashRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainMenu />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/Voting",
            element: <Voting />,
          },
          {
            path: "/todo_list",
            element: <Todo />,
          },
          {
            path: "/UserList",
            element: <UserList />,
          },
          {
            path: "/Contacts",
            element: <Contacts />,
          },
        ]
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/forgot',
    element: <ForgotPassword />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
