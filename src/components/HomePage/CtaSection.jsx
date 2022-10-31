import React from 'react';

function CtaSection() {
  return (
    <section className='mt-36'>
      <div className='flex flex-col items-center'>
        <picture>
          <img
            className='w-[180px]'
            src='/assets/images/near_gradient_bg.png'
            alt='Near wallet wallpaper 2'
          />
        </picture>
        <h3 className='text-2xl leading-44px -tracking-0.02rem font-medium'>
          Near development 101
        </h3>
        <button className='mt-4 rounded-full px-5 py-3 border border-solid text-primary_dark leading-4 border-primary_dark'>
          Start the course
        </button>
      </div>
    </section>
  );
}

export default CtaSection;
