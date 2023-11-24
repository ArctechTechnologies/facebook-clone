import React, { useState } from 'react'
import NameSection from './layouts/NameSection'
import Stories from './layouts/Stories'
import NavBar from './layouts/NavBar'
import Feeds, { ICOMMENTS } from './layouts/Feeds'
import CommentSection from './layouts/CommentSection'



const Page = (data: any) => {

  const [commentSectionScale,setCommentSectionScale] = useState('scale-0 h-0');

  const [comments,setComments] = useState<ICOMMENTS[]>([
    {
      text:'abdsfuah soashu haoshdoaishd oahsdo ahsd',
      uid:'ajdoahsoidhaoshdoih'
    },
    {
      text:'abdsfuah soashu haoshdoaishd oahsdo ahsd',
      uid:'ajdoahsoidhaoshdoih'
    }, {
      text:'abdsfuah soashu haoshdoaishd oahsdo ahsd',
      uid:'ajdoahsoidhaoshdoih'
    }, {
      text:'abdsfuah soashu haoshdoaishd oahsdo ahsd',
      uid:'ajdoahsoidhaoshdoih'
    }, {
      text:'abdsfuah soashu haoshdoaishd oahsdo ahsd',
      uid:'ajdoahsoidhaoshdoih'
    },

   ])
  return (
    <>
    <div className='h-screen w-screen relative bg-red-900'>
      <div className='h-[92%] bg-black overflow-auto'>
      <div className='h-[8%] bg-black '>
        <NameSection />
      </div>
      <div className='h-[15%] bg-black border-b border-gray-500 '>
        <Stories />
      </div>
      <div className='h-[77%]'>
        <div className='min-h-[100%] bg-black ' >
          <Feeds  openComments={setCommentSectionScale} />
        </div>
      </div>
      </div>
      <div className='h-[9%] border-t border-gray-500 w-full bg-black  bottom-0 fixed'>
        <NavBar />
      </div>
    <CommentSection comments={comments} setScale={setCommentSectionScale} scale={commentSectionScale}/>
    </div>
    </>
  )
}

export default Page