import React from 'react';
import countIcon1 from '../assets/countIcon1.svg';
import countIcon2 from '../assets/countIcon2.png';
import countIcon3 from '../assets/countIcon3.svg';
import countIcon4 from '../assets/countIcon4.svg';

const Count = () => {
  return (
    <>
    <section className='py-[50px] bg-forth_color'>
        <div className="max-w-container mx-auto">
            <div className='flex items-center'>
                <div className='w-1/2'>
                    <h2 className='text-[35px] text-secondary_color font-bold '>Helping a local <span className='text-primary_color block'>business reinvent itself</span></h2>
                    <p className='text-third_color'>We reached here with our hard work and dedication</p>
                </div>
                <div className='w-1/2'>
                    <div className='flex gap-[30px]'>
                        <div className='flex items-center gap-[10px]'>
                            <div>
                                <img src={countIcon1} alt="icon" />
                            </div>
                            <div>
                                <h2 className='text-[35px] text-secondary_color font-bold'>2,245,341</h2>
                                <p className='text-third_color'>Members</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <div>
                                <img src={countIcon2} alt="icon" />
                            </div>
                            <div>
                                <h2 className='text-[35px] text-secondary_color font-bold'>46,328</h2>
                                <p className='text-third_color'>Clubs</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[80px] mt-[30px]'>
                        <div className='flex items-center gap-[10px]'>
                            <div>
                                <img src={countIcon3} alt="icon" />
                            </div>
                            <div>
                                <h2 className='text-[35px] text-secondary_color font-bold'>828,867</h2>
                                <p className='text-third_color'>Event Bookings</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <div>
                                <img src={countIcon4} alt="icon" />
                            </div>
                            <div>
                                <h2 className='text-[35px] text-secondary_color font-bold'>1,926,436</h2>
                                <p className='text-third_color'>Payments</p>
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

export default Count