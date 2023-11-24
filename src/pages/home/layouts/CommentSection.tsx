import React from 'react'
import { ICOMMENTS } from './Feeds'

type Props = {scale:string,comments:any[],setScale:any}

const CommentSection = ({comments,scale,setScale}: Props) => {
  return (
    <div className={`${scale} absolute  bottom-0  w-full rounded-t-xl  bg-[#28282B] z-50  duration-300`}>
        <div className='h-[10%] border-b border-gray-500 flex items-center pr-4 place-content-between text-white   ' >
            <div></div>
            <div>Comments</div>
            <div onClick={()=>{setScale('h-0 scale-0')}}>X</div>
        </div>
        {
            comments.map((index:ICOMMENTS)=>{
                return<div className='text-white flex gap-3 p-2'>
                    <div>
                    <div className={`h-[1.5rem] w-[1.5rem] rounded-full bg-gradient-to-br from-blue-500 to-red-400 relative flex place-content-center items-center`}>
                    <div className='absolute  bg-black h-[1.2rem] w-[1.2rem] rounded-full'>
                    </div>
                  </div>
                    </div>
                    <div>
                    <span className='text-us pr-5' >
                        {index.uid}
                    </span>
                    <span className='text-us text-gray-300'>
                        {index.text}
                    </span>
                    </div>
                    
                </div>
            })
        }
    </div>
  )
}

export default CommentSection