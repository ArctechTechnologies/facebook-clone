import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddIcon from '@mui/icons-material/Add';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
type Props = {}

const NavBar = (props: Props) => {
     const iconArray=[
       <HomeIcon/>,
       <SearchIcon/>,
       <AddIcon/>,
       <VideocamIcon/>,
       <PermIdentityIcon/>

     ]
  return (
    <div className=' w-full h-full grid grid-cols-5 items-center text-white '>
     {
        iconArray.map((index:any)=>{
            return<div className='grid justify-items-center items-center'>
               {index}
            </div>
        })
     }
    </div>
  )
}

export default NavBar