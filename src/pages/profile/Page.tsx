import React, { useState } from 'react'
import NavBar from '../home/layouts/NavBar'
import NameSection from '../home/layouts/NameSection'
import Profile from './layouts/Profile'
import { IPOST } from '../home/interface/feeds'

type Props = {}

const Page = (props: Props) => {
   const [animate,setAnimate] = useState('animate-pulse')
   const [posts,setPosts] = useState<IPOST[]>([
    
      {
        description: 'sadasdasdasdasdsdhfgu urgfu kukefg auegfus rghieuhf uagf iaseygfa wuaugf jgvef ygdpaygf uwevfu aegfimye gfyweg fiywegf ibhksbd aseui fngweifbwui efw7efy wug',
        uid: 'asdasdasdas',
        media: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
      },  {
        description: 'sadasdasdasdasdsdhfgu urgfu kukefg auegfus rghieuhf uagf iaseygfa wuaugf jgvef ygdpaygf uwevfu aegfimye gfyweg fiywegf ibhksbd aseui fngweifbwui efw7efy wug',
        uid: 'asdasdasdas',
        media: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
      },  {
        description: 'sadasdasdasdasdsdhfgu urgfu kukefg auegfus rghieuhf uagf iaseygfa wuaugf jgvef ygdpaygf uwevfu aegfimye gfyweg fiywegf ibhksbd aseui fngweifbwui efw7efy wug',
        uid: 'asdasdasdas',
        media: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
      },  {
        description: 'sadasdasdasdasdsdhfgu urgfu kukefg auegfus rghieuhf uagf iaseygfa wuaugf jgvef ygdpaygf uwevfu aegfimye gfyweg fiywegf ibhksbd aseui fngweifbwui efw7efy wug',
        uid: 'asdasdasdas',
        media: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
      },  {
        description: 'sadasdasdasdasdsdhfgu urgfu kukefg auegfus rghieuhf uagf iaseygfa wuaugf jgvef ygdpaygf uwevfu aegfimye gfyweg fiywegf ibhksbd aseui fngweifbwui efw7efy wug',
        uid: 'asdasdasdas',
        media: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
      },  {
        description: 'sadasdasdasdasdsdhfgu urgfu kukefg auegfus rghieuhf uagf iaseygfa wuaugf jgvef ygdpaygf uwevfu aegfimye gfyweg fiywegf ibhksbd aseui fngweifbwui efw7efy wug',
        uid: 'asdasdasdas',
        media: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
      }, {
        description: 'sadasdasdasdasdsdhfgu urgfu kukefg auegfus rghieuhf uagf iaseygfa wuaugf jgvef ygdpaygf uwevfu aegfimye gfyweg fiywegf ibhksbd aseui fngweifbwui efw7efy wug',
        uid: 'asdasdasdas',
        media: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
      }, {
        description: 'sadasdasdasdasdsdhfgu urgfu kukefg auegfus rghieuhf uagf iaseygfa wuaugf jgvef ygdpaygf uwevfu aegfimye gfyweg fiywegf ibhksbd aseui fngweifbwui efw7efy wug',
        uid: 'asdasdasdas',
        media: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
      }, {
        description: 'sadasdasdasdasdsdhfgu urgfu kukefg auegfus rghieuhf uagf iaseygfa wuaugf jgvef ygdpaygf uwevfu aegfimye gfyweg fiywegf ibhksbd aseui fngweifbwui efw7efy wug',
        uid: 'asdasdasdas',
        media: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
      }, {
        description: 'sadasdasdasdasdsdhfgu urgfu kukefg auegfus rghieuhf uagf iaseygfa wuaugf jgvef ygdpaygf uwevfu aegfimye gfyweg fiywegf ibhksbd aseui fngweifbwui efw7efy wug',
        uid: 'asdasdasdas',
        media: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'
      },
    
   ])
  return (
    <div className='bg-black h-screen w-screen'>
      <div className='h-[92%] overflow-auto bg-black'>
        <div className='h-[8%]'>
          <NameSection />
        </div>
        <div className='h-[20%]  pl-3 pt-5'>
           <Profile/>
           <div className='text-white text-sm overflow-auto'>
            <div>Posts</div>
            <div className=' h-[60%] w-full'>
               {(posts.length===0)?
                  <div className='grid grid-cols-3 gap-1 w-full overflow-auto'>
                  <BlinkTile/>
                  <BlinkTile/>
                  <BlinkTile/>
                  <BlinkTile/>
                  <BlinkTile/>
                  <BlinkTile/>
                  </div>
               :<div className='grid grid-cols-3 gap-2 h-full w-full bg-black  overflow-auto'>
                {posts.map((index:IPOST)=>{
                return <>
                  <div className={`h-[11rem] w-full  bg-[#28282B]   `}>
                       <img src={index.media} className='w-full h-full' />
                  </div>
                </>
               })}
               </div>
}
            </div>
           </div>
           
        </div>
      </div>
      <div className='h-[8%]  w-full'>
        <NavBar />

      </div>

    </div>
  )

  function BlinkTile(){
    return <div className={`h-[11rem] w-full  bg-[#28282B] ${animate}`}>
                   
    </div>
  }
}

export default Page