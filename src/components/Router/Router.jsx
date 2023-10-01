
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Home from '../Home/Home';
import Login from '../Login/Login';

const Router = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home></Home>,
            children: [
                {
                    path: '/login',
                    element: <Login></Login>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;