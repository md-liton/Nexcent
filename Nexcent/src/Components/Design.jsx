import React from 'react';
import design from '../assets/design.png'

const Design = () => {
  return (
    <>
    <section className='py-[80px]'>
        <div className="max-w-container mx-auto">
            <div className='flex items-center'>
                <div className='w-[40%]'>
                    <img src={design} alt="img" />
                </div>
                <div className='w-[60%] pr-[100px]'>
                    <h2 className='text-[35px] text-secondary_color font-bold pr-[100px]'>How to design your site footer like we did</h2>
                    <p className='text-third_color'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className='text-primary_color py-[10px] px-[20px] border-[1px] border-primary_color rounded-[5px] hover:text-white hover:bg-primary_color hover:transition-all mt-[20px]'>Learn More</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Design