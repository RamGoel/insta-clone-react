import React from 'react'
import leftImage from '../../assets/insta-login-img.png'
import igLogo from '../../assets/ig-logo.png'
import storeIcon from '../../assets/store-icons.png'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div>

        <div className='d-flex align-items-center fullH justify-content-center' >
            <div className="col-6 d-flex">

                <div className='col-7'>
                    <img src={leftImage} width={'90%'} alt="newone" />
                </div>

                <div className="col-5">
                    <div className='container'>

                        <div className='border text-center p-3  mb-2'>
                            <div className='p-3'>

                                <img src={igLogo} className='w-75' alt="new" />
                            </div>
                            <div>

                                <input type="text" placeholder='Phone number, username or email' className="form-control my-2" />
                                <input type="text" placeholder="Password" className="form-control my-2" />
                                <button className='btn'>Log in</button>
                            </div>

                            <div className='d-flex align-items-center'>
                                <hr className='col-5  h-100' />
                                <p className='col-2 smallText h-100 mt-3 bold'>OR</p>
                                <hr className='col-5 h-100' />
                            </div>

                            <div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <i className="fab fa-facebook text-primary"></i>
                                    <p className='smallText my-0 mx-1 bold text-primary'>Login with facebook</p>
                                </div>
                                <div className='smallText py-2'>
                                    <Link className='text-dark text-decoration-none'>Forgot Password?</Link>
                                </div>
                            </div>
                        </div>
                        <div className='border text-center p-3 '>
                            <div className=''>
                                <p className='smallText my-0'>Don't have an account? <Link className='text-decoration-none'>Sign up</Link></p>
                            </div>
                        </div>

                        <div className='text-center p-2'>
                            <p className='text-center smallText my-0'>Get the app.</p>
                            <img src={storeIcon} alt="" width={'80%'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className='d-flex col-7 justify-content-around mx-auto align-items-center p-2'>
                <Link className='smallText text-dark text-decoration-none'>Meta</Link>
                <Link className='smallText text-dark text-decoration-none'>About</Link>
                <Link className='smallText text-dark text-decoration-none'>Blog</Link>
                <Link className='smallText text-dark text-decoration-none'>Jobs</Link>
                <Link className='smallText text-dark text-decoration-none'>Help</Link>
                <Link className='smallText text-dark text-decoration-none'>API</Link>
                <Link className='smallText text-dark text-decoration-none'>Privacy</Link>
                <Link className='smallText text-dark text-decoration-none'>Terms</Link>
                <Link className='smallText text-dark text-decoration-none'>Top Accounts</Link>
                <Link className='smallText text-dark text-decoration-none'>Locations</Link>
                <Link className='smallText text-dark text-decoration-none'>Instagram Lite</Link>
                <Link className='smallText text-dark text-decoration-none'>Contact Uploading & Non-Users</Link>
                <Link className='smallText text-dark text-decoration-none'>Meta Verified</Link>
            </div>

            <div className='col-2 mx-auto '>
                <div className="col-10 d-flex justify-content-between mx-auto ">

                <p className='smallText'>English <i className='fa fa-angle-down'></i></p>
                <p className='smallText'>© 2023 Instagram from Meta</p>
                </div>
            </div>
        </div>
    )
}

export default Login