import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><EventDetails></EventDetails></PrivateRoutes>,
                loader: ()=> fetch('/events.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <PrivateRoutes><Blog></Blog></PrivateRoutes>
            },
            {
                path: '/about',
                element: <PrivateRoutes><About></About></PrivateRoutes>
            }
        ]
    }
])

export default Routes;