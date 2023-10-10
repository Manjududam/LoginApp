
import './App.css';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLogin from './Components/UserLogin';
import Password from './Components/Password';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Recovery from './Components/Recovery';
import Reset from './Components/Reset';
import PageNotFound from './Components/PageNotFound';


const router = createBrowserRouter([
  {
    path : "/",
    element : <UserLogin/>
  },
  {
    path : "/signup",
    element : <Signup/>
  },
  {
    path : "/password",
    element : <Password/>
  },
  {
    path : "/profile",
    element : <Profile/>
  },
  {
    path : "/recovery",
    element : <Recovery/>
  },
  {
    path : "/reset",
    element : <Reset/>
  },
  {
    path : "/pageNotFound",
    element : <PageNotFound/>
  },
])

function App() {
  return (
    <>
    <div>
      <RouterProvider router={router}/>
    </div>
    </>
  );
}

export default App;
