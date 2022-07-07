import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import {Route,Routes,BrowserRouter, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
function Pages() {
  const location=useLocation();
  return (
  <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path="/recipe/:name" element ={<Recipe/>}/>
        <Route path="/cuisine/:type" element={<Cuisine/>}/>
    </Routes>
    </AnimatePresence>
  );
}

export default Pages;