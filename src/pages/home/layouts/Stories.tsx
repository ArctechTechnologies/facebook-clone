import React, { useEffect, useState } from 'react'
import { ISTORIES } from '../interface/Stories';
import axios from 'axios';
import { url } from '../../../api/api';

type Props = {}


const Stories = (props: Props) => {
       const [myStories,setMyStories] = useState({});
       const [stories,setStories] = useState<ISTORIES[]>([]);

    
    
    async  function getData(){
        try{
            console.log('asdasdasdasd')
            const {data} = await axios.get(`${url}/story`);
            console.log('data',data)
            // setStories(data);
        }catch(err:any){
            console.log(err);
            // setStories({})
        }
       }

       useEffect(() => {
          getData()
       }, [])
  return (
    <div className='h-full w-full overflow-x-auto flex gap-3 items-center pl-2'>
        <div className='flex flex-col gap-2'>
                  <div className={`h-[4rem] w-[4rem] rounded-full bg-gradient-to-br from-blue-500 to-red-400 relative flex place-content-center items-center`}>
                     <div className='absolute  bg-black h-[3.7rem] w-[3.7rem] rounded-full'>

                     </div>
                  </div>
                     <div className='text-white text-xs text-center '>{'Your Story'}</div>
                </div>
        {
            stories.map((index:ISTORIES)=>{
                return<div className='flex flex-col gap-2'>
                  <div className={`h-[4rem] w-[4rem] rounded-full bg-gradient-to-br from-blue-500 to-red-400 relative flex place-content-center items-center`}>
                     <div className='absolute  bg-black h-[3.7rem] w-[3.7rem] rounded-full'>

                     </div>
                  </div>
                     <div className='text-white text-xs text-center '>{index.uid}</div>
                </div>
            })
        }

    </div>
  )
}

export default Stories