import React from 'react';
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <>
    <section className='bg-forth_color py-[70px]'>
        <div className="max-w-container mx-auto">
            <div className='flex items-center'>
                <div className='w-2/3'>
                    <h1 className='text-[45px] font-bold pr-[350px] text-secondary_color'>Lessons and insights <span className='text-primary_color'>from 8 years</span></h1>
                    <p className='text-[18px] text-third_color pb-[30px]'>Where to grow your business as a photographer: site or social media?</p>
                    <button className='text-primary_color py-[10px] px-[20px] border-[1px] border-primary_color rounded-[5px] hover:text-white hover:bg-primary_color hover:transition-all'>Register</button>
                </div>
                <div className='w-1/3'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner