import React, { useState } from 'react'
import NameSection from './layouts/NameSection'
import Stories from './layouts/Stories'
import NavBar from './layouts/NavBar'
import Feeds from './layouts/Feeds'


type Props = {}

const Page = (props: Props) => {
  return (
    <div className='h-screen w-full bg-black'>
      <div className='h-[8%] bg-black '>
       <NameSection/>
      </div>
      <div className='h-[15%] bg-black border-b border-gray-500'>
        <Stories/>
      </div>
      <div className='h-[77%]  relative   '>
        <div className='h-[91%] bg-black overflow-y-auto ' >
          <Feeds/>
        </div>
        <div className='h-[8%] border-t border-gray-500 w-full bg-black absolute bottom-0 '>
          <NavBar/>
        </div>
      </div>
    </div>
  )
}

export default Page