import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./app.css";
import Topbar from './components/topbar/Topbar';
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList"

const App = () => {
  return (
    <BrowserRouter>
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        {/* <Routes> */}
          {/* <Route path="/" element={<Home />}> */}
          <Home/>
          {/* </Route> */}
          {/* <Route path="/users"> */}
          {/* <UserList/> */}
          {/* </Route> */}
        {/* </Routes> */}
        
      </div>
      
      </BrowserRouter>
  )
}

export default App;