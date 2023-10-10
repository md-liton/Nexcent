import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';

const Demo = () => {
  return (
    <>
    <section className='py-[80px] bg-forth_color'>
        <div className="max-w-container mx-auto">
            <div className='w-2/4 text-center mx-auto px-[100px]'>
                <h2 className='text-[45px] font-bold text-footer_bg'>Pellentesque suscipit fringilla libero eu.</h2>
                <div className='flex justify-center mt-[10px]'>
                <button className='flex items-center justify-center text-primary_color py-[10px] px-[20px] border-[1px] border-primary_color rounded-[5px] hover:text-white hover:bg-primary_color hover:transition-all'>Get a Demo <AiOutlineArrowRight/></button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Demo