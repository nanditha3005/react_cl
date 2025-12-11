import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

let App=()=>{

  return <div>
            <Router>
                <Navbar/>  
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/home" element={<Home/>}></Route>
                  <Route path="/contact" element={<Contact/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                </Routes>  
            </Router>
         </div>
}
export default App;
