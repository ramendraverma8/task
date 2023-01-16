import React from 'react'
import LeftMaincard from './LeftMaincard'
import RightMaincard from './RightMaincard'

const Maincard = (props) => {
  return (
    <div className='block '>
        <div className='w-full  h-full flex mt-5'>
            <LeftMaincard  user={props.user}/>
            <RightMaincard user={props.user}/>
        </div>
    </div>
  )
}

export default Maincard