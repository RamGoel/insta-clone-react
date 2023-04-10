import React from 'react'
import './Home.css'
import Sidebar from './Sidebar'
import FollowSection from './FollowSection'
function Home() {
  return (
    <div className='d-flex py-3 justify-content-between' style={{height:'95vh'}}>
        <Sidebar />
        <FollowSection />
    </div>
  )
}

export default Home