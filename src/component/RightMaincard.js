import React from 'react'

const RightMaincard = (props) => {









    
  return (
    <div className=' h-full w-[60%]'>
        <div className='flex flex-col gap-4'>
            <div className='pl-9 mt-2'>
                <p className='text-[16px] font-[400] text-gray-400'>Address</p>
            </div>
            <div className='ml-[70px] flex flex-col gap-1'>
                <div className='flex gap-3 items-center'>
                    <p className='text-[16px] font-[400] text-gray-400'>Street:</p>
                    <p className='text-[16px] font-[400] text-gray-800'>{props.user.address.street}</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-[16px] font-[400] text-gray-400'>Suite:</p>
                    <p className='text-[16px] font-[400] text-gray-800'>{props.user.address.suite}</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-[16px] font-[400] text-gray-400'>City:</p>
                    <p className='text-[16px] font-[400] text-gray-800'>{props.user.address.city}</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-[16px] font-[400] text-gray-400'>Zipcode:</p>
                    <p className='text-[16px] font-[400] text-gray-800'>{props.user.address.zipcode}</p>
                </div>
            </div>
            <div className='pl-9 flex flex-col w-full justify-center items-center gap-1-2'>
                <img className='w-[80%]' src='https://user-images.githubusercontent.com/107462720/210083129-f7d59313-06e0-4e39-bffd-107793a6da12.jpg'></img>
                <div className='flex flex-row-reverse w-[80%] m-[auto]  gap-4 text-[12px]'>
                    <div className='flex gap-2'>
                        <p className='text-gray-400'>Lat</p>
                        <p>{props.user.address.geo.lat}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-gray-400'>Lng</p>
                        <p>{props.user.address.geo.lng}</p>
                    </div>
                </div>
            </div>
 
        </div>
    </div>
  )
}

export default RightMaincard