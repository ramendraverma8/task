import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <Link to={`/profile/${props.id}`} style={{width:"100%"}}>
        <div className='cursor-pointer flex gap-3 items-center border-b py-2 ' >
            <img src={props.profilepicture} alt="Hii" className='rounded-full w-[7%]'/>
            <div className='text-md text-gray-700 font-[400]'>
                <p>{props.name}</p>

            </div>
        </div>
    </Link>
  )
}

export default Card