import React from 'react'
import profileImage from '../../assets/profile-image.jpg'
import { Link } from 'react-router-dom'
function FollowDiv({ obj }) {
    return (
        <div className=' text-white py-2 my-2 mx-auto d-flex align-items-center'>
            <div className='d-flex'>

                <img src={obj.image} alt="" width={'20%'} className='rounded-circle' />
                <div>

                    <p className='my-0 mx-2'>{obj.username}</p>
                    <p className="smallText my-0 mx-2 opacity-50">{obj.tagline}</p>
                </div>
            </div>
            <div className=''>
                <button className='smallText text-primary bold bg-transparent border-0'>{obj.btnText}</button>
            </div>
        </div>
    )
}
function FollowSection() {
    var usersData = [
        {
            username: "patel_sir_245",
            image: profileImage,
            btnText: "Follow",
            tagline: 'Suggested for you'
        }, {
            username: 'Search',
            image: profileImage,
            btnText: "Follow",
            tagline: 'search'
        },
        {
            username: "Explore",
            image: profileImage,
            btnText: "Follow",
            tagline: "compass"
        },
        {
            username: "Reels",
            image: profileImage,
            btnText: "Follow",
            tagline: 'camera',
        }
    ]
    var bottomLinks = ['About', 'Press', 'Help', 'API', 'Jobs', 'Privacy', 'Terms']

    return (
        <div className='col-3 py-2  '>
            <div className='w-75 mx-auto'>

                <FollowDiv obj={{ username: "ramgoel_", tagline: "Ram Goel", image: profileImage, btnText: "Switch" }} />

                <div className='d-flex align-items-center justify-content-between'>
                    <p className='mediumText text-light opacity-50 my-0'>Suggestions for you</p>
                    <button className='smallText text-light bold bg-transparent border-0'>See All</button>
                </div>

                <div>
                    {
                        usersData.map(e => {
                            return <FollowDiv obj={e} />
                        })
                    }
                </div>

                <div className='d-flex flex-wrap justify-content-around mx-auto align-items-center p-2'>
                    {
                        bottomLinks.map(linkName => {
                            return <div><Link className='smallText text-left text-dark text-decoration-none'>{linkName}</Link> ·</div> 
                        })
                    }


                </div>

                <div className=' mx-auto '>
                    <div className=" col-11 d-flex justify-content-between mx-auto ">

                        <p className='smallText'>© 2023 Instagram from Meta</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowSection