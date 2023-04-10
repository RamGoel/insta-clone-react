import React from 'react'
import profileImage from '../../assets/profile-image.jpg'
function StoryDiv({ obj }) {
    return (
        <div className='col-2 text-center'>

            <img src={obj.image} alt="" width={'60%'} className='rounded-circle storyImage' />
            <p className='smallText mt-2 text-light opacity-50'>{obj.username}</p>
        </div>
    )
}


function PostDiv({ post }) {
    return (
        <div className='col-12' style={{scale:2}}>
            <div className=' text-white py-1 my-1 mx-auto d-flex align-items-center'>
                <div className='d-flex'>

                    <img src={post.image} alt="" width={'15%'} className='rounded-circle' />
                    <div>

                        <p className='my-0 mx-2'>{post.username}<span className='mediumText opacity-50'>· {post.day}d</span> </p>
                        <p className="smallText my-0 mx-2 opacity-50">{post.location}</p>
                    </div>
                </div>
                <div className=''>
                    <button className='smallText text-white bold bg-transparent border-0'><i className="fa fa-ellipsis-h"></i></button>
                </div>
            </div>

            <div>
                <img src={post.media} alt="" />
            </div>

            <div className='d-flex justify-content-between align-items-center py-2'>
                <div className='col-4 d-flex justify-content-between'>
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-comment text-light"></i>
                    <i className="fa fa-share text-light"></i>
                </div>
                    <i className="fa fa-save text-light"></i>
            </div>
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

    var postData = [
        {
            username: "patel_sir_245",
            image: profileImage,
            location: 'Amroha, Uttar Pradesh',
            media:profileImage,
            day:2
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

            <div className='w-50 mx-auto'>
                {
                    postData.map(e=>{
                       return <PostDiv post={e} />
                    })
                }
            </div>
        </div>
    )
}

export default MiddleSection