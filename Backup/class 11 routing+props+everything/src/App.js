import React from "react";
import Navbar from "./Navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Contact from "./ContactApp/Contact";
import ContactList from "./ContactApp/ContactList";
import ContactDetails from "./ContactApp/ContactDetails";
import Home from "./ContactApp/Home";

let App=()=>{

  return <div>
            <Router>
                <Navbar/>  
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/home" element={<Home/>}></Route>
                  <Route path="/contact" element={<Contact/>}></Route>
                </Routes>  
            </Router>
         </div>
}
export default App;
