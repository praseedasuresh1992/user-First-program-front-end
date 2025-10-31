
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from "./component/Register"
import Login from "./component/login"
import Navbar from "./navbar"
import AdminDashboard from "./component/AdminDashboard"
import CommonDashboard from "./component/CommonDashboard"
import Profile from "./component/profile"
import "./App.css"
import ProtectedRoutes from "./component/ProtectedRoutes"
import Logout from "./component/Logout"

function App() {
  
        const router = createBrowserRouter([
    { path: "/", element: <Navbar />,children:[
    { path: "register", element: <Register /> },
    { path: "login", element: <Login /> },
    { path: "profile", element: (<ProtectedRoutes roles={['admin']}><Profile /></ProtectedRoutes>) },
    
]},
{path:"/admin",element:<AdminDashboard/>,children:[{ path: "logout", element: <Logout/> }]},
{path:"/common",element:<CommonDashboard/>,children:[{ path: "logout", element: <Logout/> }]}

]);
  return (
    <>
    <RouterProvider router={router} />
    
    </>
  )
}

export default App
