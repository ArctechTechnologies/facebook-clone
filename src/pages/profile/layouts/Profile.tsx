import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='h-[7rem] w-[7rem] bg-gradient-to-tr from-blue-500 to-red-400 rounded-full grid  place-content-center ' >
    <div className='h-[6.7rem] w-[6.7rem] bg-black rounded-full '>
      <img src={'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg'} title='profile' className='w-full h-full border-0 rounded-full'></img>
    </div>
  </div>
  )
}

export default Profile