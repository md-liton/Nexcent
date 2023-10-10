import React from 'react';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import icon5 from '../assets/icon5.svg';
import icon6 from '../assets/icon6.svg';

const Client = () => {
  return (
    <>
    <section className='py-[70px]'>
        <div className="max-w-container mx-auto">
            <div className='text-center'> 
              <h2 className='text-[35px] text-secondary_color font-bold'>Our Clients</h2>
              <p className='text-third_color'>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='flex justify-between items-center pt-[30px]'>
              <img src={icon1} alt="icon" />
              <img src={icon2} alt="icon" />
              <img src={icon3} alt="icon" />
              <img src={icon4} alt="icon" />
              <img src={icon5} alt="icon" />
              <img src={icon6} alt="icon" />
              <img src={icon3} alt="icon" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Client