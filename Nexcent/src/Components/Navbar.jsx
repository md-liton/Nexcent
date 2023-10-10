import React from 'react';
import Logo from '../assets/Logo.svg'

const Navbar = () => {
  return (
    <>
    <nav className='py-[10px] bg-forth_color'>
        <div className="max-w-container mx-auto ">
            <div className='flex justify-between items-center'>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div>
                    <ul className='flex items-center gap-[25px]'>
                        <li>
                            <a className='hover:text-primary_color font-bold' href="">Home</a>
                        </li>
                        <li>
                            <a className='hover:text-primary_color font-bold' href="">Service</a>
                        </li>
                        <li>
                            <a className='hover:text-primary_color font-bold' href="">Feature</a>
                        </li>
                        <li>
                            <a className='hover:text-primary_color font-bold' href="">Product</a>
                        </li>
                        <li>
                            <a className='hover:text-primary_color font-bold' href="">Testimonial</a>
                        </li>
                        <li>
                            <a className='hover:text-primary_color font-bold' href="">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-[25px]'>
                    <button className='text-primary_color py-[10px] px-[20px] border-[1px] border-primary_color rounded-[5px] hover:text-white hover:bg-primary_color hover:transition-all'>Login</button>
                    <button className='text-primary_color py-[10px] px-[20px] border-[1px] border-primary_color rounded-[5px] hover:text-white hover:bg-primary_color hover:transition-all'>Sign up</button>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar