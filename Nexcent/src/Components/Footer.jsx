import React from 'react';
import Logo from '../assets/footer.png';
import {BsInstagram} from 'react-icons/bs';
import {TfiWorld} from 'react-icons/tfi';
import {AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <section className='py-[50px] bg-footer_bg'>
        <div className="max-w-container mx-auto">
            <div className='flex'>
                <div className='w-1/3'>
                    <img src={Logo} alt="logo" />
                    <p className='text-third_color pt-[10px]'>Copyright © 2020 Nexcent ltd.</p>
                    <p className='text-third_color pb-[10px]'>All rights reserved</p>



                    <div className='flex gap-[15px] text-white pt-[30px]' >
                        <div className='bg-third_color w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer'>
                            <BsInstagram/>
                        </div>
                        <div className='bg-third_color w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer'>
                            <TfiWorld/>
                        </div>
                        <div className='bg-third_color w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer'>
                            <AiOutlineTwitter/>
                        </div>
                        <div className='bg-third_color w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer'>
                            <AiFillYoutube/>
                        </div>
                    </div>
                </div>
                <div className='w-2/3 px-[100px] flex justify-between'>
                    <div>
                        <h4 className='text-[25px] font-bold text-white'>Company</h4>
                        <ul>
                            <li className='py-[5px]'>
                                <a className='text-white py-[5px]' href="">About us</a>
                            </li>
                            <li className='py-[5px]'>
                                <a className='text-white py-[5px]' href="">Blog</a>
                            </li>
                            <li className='py-[5px]'>
                                <a className='text-white py-[5px]' href="">Contact us</a>
                            </li>
                            <li className='py-[5px]'>
                                <a className='text-white py-[5px]' href="">Pricing</a>
                            </li>
                            <li className='py-[5px]'>
                                <a className='text-white py-[5px]' href="">Testimonials</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[25px] font-bold text-white'>Support</h4>
                        <ul>
                            <li className='py-[5px]'>
                                <a className='text-white py-[5px]' href="">Help center</a>
                            </li>
                            <li className='py-[5px]'>
                                <a className='text-white py-[5px]' href="">Terms of service</a>
                            </li>
                            <li className='py-[5px]'>
                                <a className='text-white py-[5px]' href="">Legal</a>
                            </li>
                            <li className='py-[5px]'>
                                <a className='text-white py-[5px]' href="">Privacy policy</a>
                            </li>
                            <li className='py-[5px]'>
                                <a className='text-white py-[5px]' href="">Status</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[25px] font-bold text-white'>Stay up to date</h4>
                        <div className='relative'>
                        <input className='mt-[15px] focus:outline-none p-[10px] bg-third_color rounded-[10px]' type="email" placeholder='Your Email Address' />
                        <FaTelegramPlane className='absolute right-[10px] top-[27px] text-white'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer