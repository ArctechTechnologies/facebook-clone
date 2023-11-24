import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './pages/home/Page';

function App() {

  return (
<>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Page/>}/>
 </Routes>
 </BrowserRouter>
</>
  );
}

export default App;
