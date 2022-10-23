import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-slate-200 ">
                <div className="flex-1">
                    <button className='ml-4'><Link to='/'> Home </Link></button>
                    <button className='ml-4'><Link to='/tours'> Tours </Link></button>
                    <button className='ml-4'><Link to='/login'> Login </Link></button>
                    <button className='ml-4'><Link to='/register'> Register </Link></button>
                    <button className='ml-4'><Link to='/about'> About  </Link></button>
                    <button className='ml-4'><Link to='/contact'> Contact  </Link></button>
                    
                    
                </div>
                   
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;