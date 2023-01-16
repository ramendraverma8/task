import React from 'react'

const Leftcard = () => {
  return (
    <div className='bg-gradient-to-r from-[#5168cd] to-[#3e57c8]  h-[95vh] w-[21vw] rounded-[23px] flex flex-col justify-center items-center px-8 text-white'>
        <div className='border-b capitalize border-white block w-full py-3'>
            <a href="/1/posts" style={{color:"white"}}>Profile</a>
        </div>
        <div className='border-b capitalize border-white block w-full py-3'>
            <a href="/1/posts" style={{color:"white"}}>Posts</a>
        </div>
        <div className='border-b capitalize border-white block w-full py-3'>
            <a href="/1/posts" style={{color:"white"}}>Galary</a>
        </div>
        <div className='border-b capitalize border-white block w-full py-3'>
            <a href="/1/posts" style={{color:"white"}}>Todo</a>
        </div>
    </div>
  )
}

export default Leftcard