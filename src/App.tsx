import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';

import './assets/css/styles.css'

function App() {
  return (
   <BrowserRouter>
    <Nav/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/skills' element={<Skills/>}/>
         <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
   </BrowserRouter>
      
  );
}

export default App;
