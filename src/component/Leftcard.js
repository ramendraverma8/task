import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Leftcard = () => {
    const { id,  } = useParams()
  return (
    <div className='bg-gradient-to-r from-[#5168cd] to-[#3e57c8]  h-[95vh] w-[21vw] rounded-[23px] flex flex-col justify-center items-center px-8 text-white'>
        <div className='border-b capitalize border-white block w-full py-3'>
            <Link to={`/profile/${id}`} style={{color:"white"}}>Profile</Link>
        </div>
        <div className='border-b capitalize border-white block w-full py-3'>
            <Link to={`/profile/${id}/post`} style={{color:"white"}}>Posts</Link>
        </div>
        <div className='border-b capitalize border-white block w-full py-3'>
            <Link to={`/profile/${id}/galary`} style={{color:"white"}}>Galary</Link>
        </div>
        <div className='border-b capitalize border-white block w-full py-3'>
            <Link to={`/profile/${id}/todo`} style={{color:"white"}}>Todo</Link>
        </div>
    </div>
  )
}

export default Leftcard