import React from 'react'
import { useParams } from 'react-router-dom'
import Commingsoon from '../component/Commingsoon'
import Leftcard from '../component/Leftcard'
import Maincard from '../component/Maincard'
import Topcard from '../component/Topcard'

const Profile = (props) => {
    const { id, type } = useParams()
    // console.log(id)
    console.log(props.users)
    const user = props.users.find((user) => user.id == id)
    // console.log(user)
  return (<div className=' w-screen h-screen  flex gap-10 px-8  pt-3 overflow-x-hidden'>
    <Leftcard />
    
    <div className='w-[80vw]'>
      <Topcard user={user} type={type?type:"Profile"} />
      {type? <Commingsoon /> : <Maincard user={user} />}
    </div>
  </div>
  )
}

export default Profile