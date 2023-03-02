import logo from './logo.svg';
import './App.css';
import React from 'react';

import Ccrusher from './compaction/crusher';
import Home from './home'
import Compaction from './compaction';
import CSilicon from './compaction/silico';
import Ciron from './compaction/iron';
import Direct from './direct';
import Dmixed from './direct/mixed';
import D2425 from './direct/2-425';
import D42575 from './direct/425-75';
import D4752 from './direct/4.75-2';
import Sieve from './sieve';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Ssilico, { Scrusher, Siron } from './sieve/Ssilico';

function App() {
  return (
  <>
  <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='compaction' element={<Compaction/>}/>
              <Route path='compaction/silico' element={<CSilicon/>}/>
              <Route path='compaction/crusher' element={<Ccrusher/>}/>
              <Route path='compaction/iron' element={<Ciron/>}/>
       <Route path='direct' element={<Direct/>}/>
              <Route path='direct/mixed' element={<Dmixed/>}/>
              <Route path='direct/D2425' element={<D2425/>}/>
              <Route path='direct/D4752' element={<D4752/>}/>
              <Route path='direct/D42575' element={<D42575/>}/>
       <Route path='sieve' element={<Sieve></Sieve>}/> 
              <Route path='sieve/silico' element={<Ssilico/>}/> 
              <Route path='sieve/iron' element={<Siron/>}/>
              <Route path='sieve/crusher' element={<Scrusher/>}/>     

     </Routes>
    
  </BrowserRouter>
 
 
  </>
  );
}

export default App;
