import React from 'react'
import NavBar from '../home/layouts/NavBar'
import NameSection from '../home/layouts/NameSection'
import Profile from './layouts/Profile'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='bg-black h-screen w-screen'>
      <div className='h-[92%]'>
        <div className='h-[8%]'>
          <NameSection />
        </div>
        <div className='h-[20%]  pl-3 pt-5'>
           <Profile/>
        </div>
      </div>
      <div className='h-[8%]'>
        <NavBar />

      </div>

    </div>
  )
}

export default Page