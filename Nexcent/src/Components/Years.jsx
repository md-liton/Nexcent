import React from 'react';
import years from '../assets/years.png';

const Years = () => {
  return (
    <>
    <section className='py-[80px]'>
        <div className="max-w-container mx-auto">
            <div className='flex'>
                <div className='w-[40%]'>
                    <img src={years} alt="img" />
                </div>
                <div className='w-[60%] pr-[100px]'>
                    <h2 className='text-[35px] text-secondary_color font-bold pr-[200px]'>The unseen of spending three years at Pixelgrade</h2>
                    <p className='text-third_color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className='text-primary_color py-[10px] px-[20px] border-[1px] border-primary_color rounded-[5px] hover:text-white hover:bg-primary_color hover:transition-all mt-[20px]'>Learn More</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Years