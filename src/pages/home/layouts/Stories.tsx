import React, { useEffect, useState } from 'react'
import { ISTORIES } from '../interface/Stories';
import axios from 'axios';
import { url } from '../../../api/api';
import StoryPage from '../../stories/view/Page'

type Props = {}


const Stories = (props: Props) => {
       const [myStories,setMyStories]:any = useState<ISTORIES[]>([
        {
            media:'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
            ,uid:'asdasdasdsa'
        },
        
       ]);
       const [stories,setStories] = useState<ISTORIES[]>([]);
        const [uploadStory,setUploadStory]:any = useState<any>();
         const [openStory,setOpenStory] = useState<boolean>(false)

    
    
    async  function getData(){
        try{
            console.log('asdasdasdasd')
            const {data} = await axios.get(`${url}/story`);
            console.log('data',data)
            setStories(data);
        }catch(err:any){
            console.log(err);
        }
       }

       async function  uploadStories() {
        try{
             const {status} = await  axios.post(`${url}/uploadstory`,{uploadStories})
              if(status===200){
                  setMyStories([...myStories,...uploadStory]);
              }
        }catch(err:any){
            console.log(err);
        }
       }

       useEffect(() => {
          getData()
       }, [])

  return (
    <>
     <StoryPage stories={myStories} close={setOpenStory} scale={openStory}/>
    <div className='h-full w-full overflow-x-auto flex gap-3 items-center pl-2'>
        <div className='flex flex-col gap-2 relative'>
                  <div className={`h-[4rem] w-[4rem] rounded-full bg-gradient-to-br from-blue-500 to-red-400 relative flex place-content-center items-center`}>
               <label className='absolute  w-6 h-6 bg-red-400  right-0 z-50 bottom-0  rounded-full text-white  text-center'  htmlFor={'storyInput'} >+</label>
               <input title='asd' type='file'  className='scale-0' id='storyInput'   onClick={(e:any)=>{console.log('asdasdas');setUploadStory(e.target?.files?.[0])}} />
                     <div className='absolute  bg-black h-[3.7rem] w-[3.7rem] rounded-full' onClick={()=>{setOpenStory(true)}}>
                     
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
        </>
  )
}

export default Stories