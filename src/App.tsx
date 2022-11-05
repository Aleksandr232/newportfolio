import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';

import './assets/css/styles.css'

function App() {
  return (
   <BrowserRouter>
    <Nav/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
      </Routes>
   </BrowserRouter>
      
  );
}

export default App;
