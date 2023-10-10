import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const Caring = () => {
  return (
    <>
    <section className='py-[80px]'>
        <div className="max-w-container mx-auto">
            <div className='text-center w-2/3 mx-auto'>
                <h2 className='text-[35px] text-secondary_color font-bold '>Caring is the new marketing</h2>
                <p className='text-third_color px-[150px]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='py-[20px]'>
                <div className='flex justify-between '>

                <div className='relative w-1/3'>
                    <div>
                    <img src={img3} alt="img" />
                    </div>
                    <div className='bg-white text-center absolute bottom-[-54px] left-[68px] drop-shadow-xl px-[20px] py-[30px] rounded-[10px]'>
                        <p className='text-third_color w-[220px]'>
                        Creating Streamlined Safeguarding Processes with OneRen
                        </p>
                        <div className='flex justify-center'>
                        <button className='flex items-center justify-center gap-[10px] text-primary_color'>Readmore <AiOutlineArrowRight/></button>
                        </div>
                    </div>
                </div>
                <div className='relative w-1/3'>
                    <div>
                    <img src={img2} alt="img" />
                    </div>
                    <div className='bg-white text-center absolute bottom-[-54px] left-[68px] drop-shadow-xl px-[20px] py-[30px] rounded-[10px]'>
                        <p className='text-third_color w-[220px]'>
                        What are your safeguarding responsibilities and how can you manage them?
                        </p>
                        <div className='flex justify-center'>
                        <button className='flex items-center justify-center gap-[10px] text-primary_color'>Readmore <AiOutlineArrowRight/></button>
                        </div>
                    </div>
                </div>
                <div className='relative w-1/3'>
                    <div>
                    <img src={img1} alt="img" />
                    </div>
                    <div className='bg-white text-center absolute bottom-[-54px] left-[68px] drop-shadow-xl px-[20px] py-[30px] rounded-[10px]'>
                        <p className='text-third_color w-[220px]'>
                        Revamping the Membership Model with Triathlon Australia
                        </p>
                        <div className='flex justify-center'>
                        <button className='flex items-center justify-center gap-[10px] text-primary_color'>Readmore <AiOutlineArrowRight/></button>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Caring