import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import review from '../assets/review.png';
import icon from '../assets/iconColor.svg';
import icon2 from'../assets/icon2.svg';
import icon3 from'../assets/icon3.svg';
import icon4 from'../assets/icon4.svg';
import icon5 from'../assets/icon5.svg';
import icon6 from'../assets/icon6.svg';

const Review = () => {
  return (
    <>
    <section className='py-[50px] bg-forth_color'>
        <div className="max-w-container mx-auto">
            <div className='flex'>
                <div className='w-1/4'>
                    <img src={review} alt="" />
                </div>
                <div className='w-3/4 pl-[100px]'>
                    <p className='text-third_color'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h4 className='text-primary_color text-[30px] font-bold'>Tim Smith</h4>
                    <p className='text-third_color'>British Dragon Boat Racing Association</p>
                    <div className='flex justify-between mt-[20px]'>
                        <img src={icon} alt="icon" />
                        <img src={icon2} alt="icon" />
                        <img src={icon3} alt="icon" />
                        <img src={icon4} alt="icon" />
                        <img src={icon5} alt="icon" />
                        <img src={icon6} alt="icon" />
                        <div className='flex items-center cursor-pointer text-primary_color gap-[10px]'>
                            <button>Meet all customers</button>
                            <AiOutlineArrowRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Review