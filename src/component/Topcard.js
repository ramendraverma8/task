import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Maincard from './Maincard'

const Topcard = (props) => {
    const [toggle, setToggle] = useState(false)
    
  return (<>
    <div className='h-[13vh]  w-[100%] border-b border-gray-300'>
        <div className='flex h-full items-center justify-between '>
            <div className="capitalize text-[20px] text-gray-500">
                <p>{props.type}</p>
            </div>
            <div className="relative inline-block text-left mt-5 ml-40 ">
                <div>
                    <button className='inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none' onClick={() =>setToggle(!toggle)}>
                        <div className=' w-max cursor-pointer flex justify-end gap-3 items-center'>
                            <img className='rounded-full w-[5%]' src= {props.user.profilepicture}></img>
                            <p> {props.user.name}</p>
                        </div>
                    </button>
                    {toggle ? <div className='py-1'>
                    <div className=' flex flex-col absolute right-0 z-10 mt-2 w-[20vw] origin-top-right rounded-md bg-white shadow-lg focus:outline-none transform opacity-100 scale-100-center items-center gap-2 pb-3' >
                        <img className='rounded-full' src={props.user.profilepicture} width="50%"></img>
                        <p className='text-[16px] font-[400] text-gray-800'>{props.user.name}</p>
                        <p className='text-[14px] text-gray-400'> {props.user.email}</p>
                        <div className='mx-5 border-t border-gray-300 mt-3'>
                            <Link to= "/profile/1" >
                            <div className='cursor-pointer flex gap-3 justify-center items-center border-b py-2 '>
                                <img className='rounded-full w-[10%]' src='https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg'></img>
                                <div className='text-md text-gray-700 font-[400]'>
                                    <p> Leanne Graham</p>
                                </div>
                            </div>
                            </Link>
                            <Link to= "/profile/2" >
                            <div className='cursor-pointer flex gap-3 justify-center items-center border-b py-2 '>
                                <img className='rounded-full w-[10%]' src='https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg'></img>
                                <div className='text-md text-gray-700 font-[400]'>
                                    <p> Ervin Howell</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <button className='mt-2 rounded-[20px] px-2 py-1 text-white bg-[#e15b22]'>
                            <Link to="/">Signout</Link>
                        </button>

                    </div>
                    </div> : null}
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Topcard