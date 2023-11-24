import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddIcon from '@mui/icons-material/Add';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from 'react-router-dom';
type Props = {}

const NavBar = (props: Props) => {
   const navigate = useNavigate();
     const iconArray:any[]=[
      //  <HomeIcon/>,
      //  ,
      //  ,
      //  
      {
        link:'/',
        icon:<HomeIcon/>,
        
      },
      {
        icon:<SearchIcon/>,
        link:'/search'
      },
      {
        icon:<AddIcon/>,
        link:'/add/post'
      },
      {
        icon:<VideocamIcon/>,
        link:'/reels'
      },
      {
        icon:<PermIdentityIcon/>,
        link:'/profile'
      }

      
     ]
  return (
    <div className=' w-full h-full grid grid-cols-5 items-center text-white bg-black '>
     {
        iconArray.map((index:any)=>{
            return<div className='grid justify-items-center items-center' onClick={()=>{navigate(index.link)}}>
               {index.icon}
            </div>
        })
     }
    </div>
  )
}

export default NavBar