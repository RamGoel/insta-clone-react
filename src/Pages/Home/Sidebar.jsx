import React from 'react'
import './Home.css'
import profileImage from '../../assets/profile-image.jpg'
function SidebarItem({obj}){
    return(
        <div className='sidebar-item text-white py-2 my-2 col-10 px-3 mx-auto d-flex align-items-center'>
            <i style={{width:'15%'}} className={(obj.brand)?`fab fa-${obj.icon}`:`fa fa-${obj.icon}`}></i>
            <p className='my-0 mx-2'>{obj.title}</p>
        </div>
    )
}


function Sidebar() {

    var sideBarData=[
        {
            title:"Home",
            icon:'home'
        },{
            title:'Search',
            icon:'search'
        },
        {
            title:"Explore",
            icon:"compass"
        },
        {
            title:"Reels",
            icon:'camera',
        },
        {
            title:"Messages",
            icon:"facebook-messenger",
            brand:true
        },
        {
            title:"Notifications",
            icon:"heart"
        },
        {
            title:"Create",
            icon:"plus"
        }
    ]
  return (
    <div className='col-2 sidebar' style={{height:'95vh'}}>
        <div className='col-7 py-3  px-2 mr-auto '>

        <img src="https://thumbs.dreamstime.com/b/print-204012277.jpg" width={'100%'} alt="" />
        </div>

        <div>
            {
                sideBarData.map(e=>{
                    return <SidebarItem obj={e} />
                })
            }
        </div>

        <div className='sidebar-item text-white py-2 my-2 col-10 px-3 mx-auto d-flex align-items-center'>
            <img src={profileImage} alt="" width={'15%'} className='rounded-circle' />
            <p className='my-0 mx-2'>Profile</p>
        </div>


        <div className='sidebar-item text-white py-2 my-2 col-10 px-3 mx-auto d-flex align-items-center'>
            <i style={{width:'15%'}} className="fa fa-bars"></i>
            <p className='my-0 mx-2'>More</p>
        </div>
    </div>
  )
}

export default Sidebar