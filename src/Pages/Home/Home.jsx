import React from 'react'
import './Home.css'
import Sidebar from './Sidebar'
import FollowSection from './FollowSection'
import MiddleSection from './MiddleSection'
function Home() {
  return (
    <div className='d-flex py-3 justify-content-between' style={{height:'95vh'}}>

        <Sidebar />
        <MiddleSection />
        <FollowSection />
    </div>
  )
}

export default Home