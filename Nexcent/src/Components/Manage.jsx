import React from 'react';
import icon1 from '../assets/iconImag1.svg';
import icon2 from '../assets/iconImag2.svg';
import icon3 from '../assets/iconImag3.svg';

const Manage = () => {
  return (
    <>
    <section className='py-[80px]'>
        <div className="max-w-container mx-auto">
            <div className='w-1/2 mx-auto text-center'>
                <h2 className='text-[35px] text-secondary_color font-bold px-[50px]'>Manage your entire community in a single system</h2>
                <p className='text-third_color'>Who is Nextcent suitable for?</p>
            </div>
            <div className='flex justify-between gap-[20px] pt-[20px]'>
                <div className='w-1/3 text-center  py-[50px] shadow'>
                    <div className='flex justify-center'>
                        <img src={icon1} alt="img" />
                    </div>
                    <h3 className='text-[30px] text-secondary_color font-bold px-[100px]'>Membership Organisations</h3>
                    <p className='text-third_color px-[40px]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className='w-1/3 text-center py-[50px] shadow'>
                    <div className='flex justify-center'>
                        <img src={icon2} alt="img" />
                    </div>
                    <h3 className='text-[30px] text-secondary_color font-bold px-[100px]'>National Associations</h3>
                    <p className='text-third_color px-[40px]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className='w-1/3 text-center py-[50px] shadow'>
                    <div className='flex justify-center'>
                        <img src={icon3} alt="img" />
                    </div>
                    <h3 className='text-[30px] text-secondary_color font-bold px-[100px]'>Clubs And Groups</h3>
                    <p className='text-third_color px-[40px]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Manage