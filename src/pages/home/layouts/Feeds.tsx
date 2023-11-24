import React, { useState } from 'react'
import { IPOST } from '../interface/feeds'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
type Props = {openComments:any}


export interface ICOMMENTS{
  uid:string
  text:string
}





const Feeds = ({openComments}: Props) => {
  const [data, setData] = useState<IPOST[]>(
    [
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
      },
    ]
  );

  

  return (
    <div className='h-full w-full overflow-auto '>
      {
        data?.map((index: IPOST) => {
          return <>
            <div className='w-full h-full text-white  bg-black'>
              <div className='flex place-content-between h-[10%] p-3'>
                <div className='flex gap-3 text-us font-semibold '>

                  <div className={`h-[1.5rem] w-[1.5rem] rounded-full bg-gradient-to-br from-blue-500 to-red-400 relative flex place-content-center items-center`}>
                    <div className='absolute  bg-black h-[1.2rem] w-[1.2rem] rounded-full'>
                    </div>
                  </div>
                   <div>{index.uid}</div>
                </div>

                <div>
                    <MoreVertOutlinedIcon/>
                </div>
              </div>
              <img className='h-[70%]' title='post' src={index.media}>
              </img>
              <div className='h-[10%] flex p-1 gap-2'>
                <FavoriteBorderOutlinedIcon/>  
                <div className='' onClick={()=>{openComments(' scale-100 h-[75%]')}}>
                <ChatBubbleOutlineOutlinedIcon/> 
                </div>
                <SendOutlinedIcon/>   
              </div>
              <div className='w-2/3  pl-2 text-us overflow-auto'>
                <span className='font-semibold mr-3'>{index.uid}</span>
                <span>{index.description}</span>
              </div>
            </div>
          </>
        })
      }

    </div>
  )
}

export default Feeds