import React from 'react'

const LeftMaincard = (props) => {
  return (
    <div className='border-r border-gray-300 h-full w-[40%]'>
                <div className="flex flex-col  w-full items-center h-full justify-center">
                    <img className='rounded-full w-[48%]' src={props.user.profilepicture}></img>
                    <p className='text-[16px] font-[400] text-gray-800'>{props.user.name}</p>
                    <div className='flex flex-col gap-2 border-b border-gray-300 py-3'>
                        <div className='flex gap-3 items-center justify-center'>
                            <p className='text-[16px] font-[400] text-gray-400'>UserName:</p>
                            <p className='text-[16px] font-[400] text-gray-800'>{props.user.username}</p>
                        </div>
                        <div className='flex gap-3 items-center justify-center'>
                            <p className='text-[16px] font-[400] text-gray-400'>Email:</p>
                            <p className='text-[16px] font-[400] text-gray-800'>{props.user.email}</p>
                        </div>
                        <div className='flex gap-3 items-center justify-center'>
                            <p className='text-[16px] font-[400] text-gray-400'>PhoneNo.:</p>
                            <p className='text-[16px] font-[400] text-gray-800'>{props.user.phone}</p>
                        </div>
                        <div className='flex gap-3 items-center justify-center'>
                            <p className='text-[16px] font-[400] text-gray-400'>Website:</p>
                            <p className='text-[16px] font-[400] text-gray-800'>{props.user.website}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2  py-3'>
                    <div className='flex gap-3 items-center justify-center'>
                            <p className='text-[16px] font-[400] text-gray-400'>CompanyName:</p>
                            <p className='text-[16px] font-[400] text-gray-800'>{props.user.company.name}</p>
                        </div>
                        <div className='flex gap-3 items-center justify-center'>
                            <p className='text-[16px] font-[400] text-gray-400'>CatchPhrase:</p>
                            <p className='text-[16px] font-[400] text-gray-800'>{props.user.company.catchPhrase}</p>
                        </div>
                        <div className='flex gap-3 items-center justify-center'>
                            <p className='text-[16px] font-[400] text-gray-400'>bs:</p>
                            <p className='text-[16px] font-[400] text-gray-800'>{props.user.company.bs}</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default LeftMaincard