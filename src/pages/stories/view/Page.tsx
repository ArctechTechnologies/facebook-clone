import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import { ISTORIES } from '../../home/interface/Stories'

type Props = {stories:ISTORIES[],close:any,scale:boolean}

const Page = ({stories,close,scale}: Props) => {
   const [num,setNum] = useState<number>(0)
  return (
    <Dialog open={scale} fullScreen >
      <div className='h-full w-full bg-black ' style={{backgroundImage:`url(${stories[num]})`}}>
        <div className='absolute w-full  flex place-content-between'>
          <div className='flex gap-3 place-content-center items-center pl-3'>
          <div className='h-[2rem] w-[2rem] bg-gradient-to-tr from-blue-500 to-red-400 rounded-full grid  place-content-center ' >
    <div className='h-[1.7rem] w-[1.7rem] bg-black rounded-full '>
      <img src={'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'} title='profile' className='w-full h-full border-0 rounded-full'></img>
    </div>
  </div>
    <div className='text-white font-thin'>
      {'Aditya Chandel'}
    </div>

          </div>
        <div  className='flex place-content-end text-white p-5 ' onClick={()=>{close(false)}}>
          <div>X</div>
        </div>
        </div>
         <img title='loading' className='h-full w-full ' src={stories[num].media} ></img>
        
      </div>
    </Dialog>
  )
}

export default Page