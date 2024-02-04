import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ResumePage from './components/Pages/ResumePage';
import HomePage from './components/Pages/HomePage';
import AboutMe from './components/Pages/AboutMe';
import 'bulma/css/bulma.min.css';


function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path = "/" element = { <HomePage /> } />
            <Route path = "/Resume" element = { <ResumePage /> } />
            <Route path = "/AboutMe" element = { <AboutMe /> } />
          </Routes> 
      </Router>
      
    </>
  );
}

export default App;
