import Main from "./Main";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home/Home");
const { default: Login } = require("../Pages/Login/Login");
const { default: Register } = require("../Pages/Register/Register");
const { default: Tours } = require("../Pages/Tours/Tours");

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/tours',
                element:<Tours></Tours>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;