import React from 'react';

import Header from './header.js';
import Services from './services';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Support from './support.js';
import Locateus from './locateus.js';
import Navigationbar from './Navigation.js';
import Footer from './footer.js'
import Login from './login.js'

function Home() {


   return (
      <div>
      
         <BrowserRouter> 
              <Navigationbar/>
           <Routes>
            <Route path='/' element={<Header/>} ></Route>
            <Route path='home' element={<Header/>} ></Route>
            <Route path='services' element={<Services/>} ></Route>
            <Route path='support' element={<Support/>}></Route>
            <Route path='locateus' element={<Locateus/>}></Route>
            <Route path='login' element={<Login />}></Route>
          </Routes>
               <Footer/>
         </BrowserRouter>
          {/* <Header/>
    <Services/> */}
      </div>
   )
}

export default Home
