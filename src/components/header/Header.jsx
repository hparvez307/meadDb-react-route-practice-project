import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-green-700 m-container mt-6 py-5 rounded-lg flex justify-between px-16'>
            
            <div className='text-3xl font-extrabold tracking-wide'>Meal<span className='text-red-500'>DB</span></div>


            <div className='text-xl font-bold flex gap-4'>
                <NavLink
                     to='/'
                     className={({ isActive }) => isActive ? 'text-red-500 ': ''
                        
                     }
                   >
                    Home
                </NavLink>
                <NavLink
                     to='/about'
                     className={({ isActive }) => isActive ? 'text-red-500 ': ''
                        
                     }
                   >
                    About
                </NavLink>
                <NavLink
                     to='/food'
                     className={({ isActive }) => isActive ? 'text-red-500 ': ''
                        
                     }
                   >
                  Food
                </NavLink>
            </div>




        </div>
    );
};

export default Header;