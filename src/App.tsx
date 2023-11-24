import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './pages/home/Page';
import RegisterPage from './pages/register/Page'
import ProfilePage from './pages/profile/Page'
import axios from 'axios';
import { url } from './api/api';

interface IPROFILE{
  name:string
  username:string
  password:string
  image:string
  bio:string
  private:string
}
function App() {

    const [profileData,setProfileData] = useState<IPROFILE>();

    async function getData(){
      try{
        const {data} = await axios.get(`${url}/profile`)
         setProfileData(data);
      }catch(err:any){
        console.log(err.message);

      }
    }
    useEffect(() => {
       getData()
    }, [])

  return (
<>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Page/>}/>
  <Route path='/register' element={<RegisterPage />}/>
  <Route path='/profile' element={< ProfilePage/>}/>
 </Routes>
 </BrowserRouter>
</>
  );
}

export default App;
