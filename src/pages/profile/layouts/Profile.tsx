import React from 'react'
import ProfileImage from '../components/ProfileImage'

type Props = {}

const Profile = (props: Props) => {
  return (
    <>
      <div className='flex gap-5  text-white  place-content-between  pb-2'>
        <div className='grid gap-3'>
          <ProfileImage />


        </div>
        <div className='grid  items-center'>
          <div>{'Aditya Chandel ,19'}</div>
          <div>{'Total Friends : 17'}</div>
        </div>
        {/* div to be left blank */}
        <div></div>
      </div>
      <div className=' border-b border-gray-500'>
        <div className='text-gray-500 text-sm'>Bio</div>
        <div className='text-white text-us w-1/2   '>{`aslhdas djkg asdg ausg diuagsda\sd
  ashda sduha sgd asd yas das
  dahsudy aoisdu asd
  asudyoi asda
  sdasyd pasdas
  ds`}</div>
      </div>
    </>
  )
}



export default Profile