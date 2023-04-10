import React from 'react'
import profileImage from '../../assets/profile-image.jpg'
function StoryDiv({ obj }) {
    return (
        <div className='col-2 text-center'>

            <img  src={obj.image} alt="" width={'60%'} className='rounded-circle storyImage' />
            <p className='smallText mt-2 text-light opacity-50'>{obj.username}</p>
        </div>
    )
}
function MiddleSection() {
    var usersData = [
        {
            username: "patel_sir_245",
            image: profileImage,
            btnText: "follow",
            tagline: 'Suggested for you'
        }, {
            username: 'Search',
            image: profileImage,
            btnText: "follow",
            tagline: 'search'
        },
        {
            username: "Explore",
            image: profileImage,
            btnText: "follow",
            tagline: "compass"
        },
        {
            username: "Reels",
            image: profileImage,
            btnText: "follow",
            tagline: 'camera',
        },
        {
            username: "Reels",
            image: profileImage,
            btnText: "follow",
            tagline: 'camera',
        },
        {
            username: "Reels",
            image: profileImage,
            btnText: "follow",
            tagline: 'camera',
        }
    ]
    return (
        <div className='col-6 py-4 '>
            <div className='d-flex'>
                {
                    usersData.map(e => {
                        return <StoryDiv obj={e} />
                    })
                }
            </div>
        </div>
    )
}

export default MiddleSection