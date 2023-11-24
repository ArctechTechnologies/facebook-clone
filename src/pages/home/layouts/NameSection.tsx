import React from 'react'
import { global } from '../../../global'
import SettingsIcon from '@mui/icons-material/Settings';
import { Badge } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
type Props = {}

const NameSection = (props: Props) => {
  return (
    <div className='flex place-content-between w-full h-full text-white  pl-2 items-center border-b border-gray-700'>
    <div className='text-xl'>{global.name}</div>
    <div className='flex gap-5'>
      <div>{<SettingsIcon scale={50} />}</div>

      {/* messages icon */}
      <div className="pr-3 flex gap-2  items-center ">
          <div className="relative">
            <div className=" cursor-pointer    "  title="view notifications" onClick={()=>{}}>
              <Badge badgeContent={1} color="error" >
                <ChatIcon  />
              </Badge>
            </div>
          </div>
          <div className=" " onClick={() => {}} >
          </div>
    </div>
    </div>

  </div>
  )
}

export default NameSection