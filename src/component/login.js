import React from 'react'
import "../cssfolder/login.css"
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const login = () => {
    return (
        <div>
            <div className='LoginBg'>
                <div className='wrapper'>
                    <form>
                        <h1>Login</h1>
                        <div className='input-box'>
                            <input type='text' className='input-user' placeholder='Username*'/>
                            {/* <PersonIcon className='bxs-user i'></PersonIcon> */}
                        </div>
                        <div className='input-box '>
                            <input type='password'className='input-user' placeholder='Password*'/>
                            {/* <LockIcon className='bxs-user i'></LockIcon> */}
                        </div>
                        <div className='remember-forget'>
                          <label><input type='checkbox'/> Remember me</label>
                          <Link className='a'>Forget password?</Link>
                        </div>
                       <button type='submit' className='butn'>Submit</button>
                       <div className='register-link'>
                        <p>First Time In RoyalEnfild.Com?<Link className='a'>Sign-Up</Link></p>
                       </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default login
