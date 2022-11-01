import Image from 'next/image';
import React from 'react';

function CourseSection() {
  return (
    <section className='mt-16 lg:mt-0'>
      <div className='flex flex-col items-center text-center lg:flex-row lg:justify-between lg:max-w-[940px] mx-auto mb-16'>
        <div>
          <Image
            width={180}
            height={180}
            src='/assets/icons/spot.svg'
            alt='spot icon'
            className='lg:w-[296px]'
          />
        </div>
        <div className='flex flex-col gap-6 lg:text-left px-22px lg:px-0'>
          <h3 className='text-2xl leading-44px font-graphik_medium -tracking-0.02rem font-medium my-5'>
            Complete the course
          </h3>
          <p className='text-lg text-secondary_dark leading-6'>
            In three simple modules, learn:
          </p>
          <div className='flex flex-col items-center gap-2 lg:flex-row'>
            <Image
              width={18}
              height={18}
              src='/assets/images/essential_icon.png'
              alt='essential icon'
              className='lg:w-8'
            />
            <p className='text-secondary_dark'>Essential NEAR concepts</p>
          </div>
          <div className='flex flex-col items-center gap-2 lg:flex-row'>
            <Image
              width={18}
              height={18}
              src='/assets/images/contract_icon.png'
              alt='contract icon'
              className='lg:w-8'
            />
            <p className='text-secondary_dark'>
              How to write smart contracts on NEAR
            </p>
          </div>
          <div className='flex flex-col items-center gap-2 lg:flex-row'>
            <Image
              src='/assets/images/dapps_icon.png'
              width={18}
              height={18}
              alt='dapps icon'
              className='lg:w-8'
            />
            <p className='text-secondary_dark'>
              How to build dapps on the NEAR blockchain
            </p>
          </div>
        </div>
      </div>
      <div className='hidden lg:flex justify-center ml-10'>
        <picture>
          <img src='/assets/icons/arrowReverse.svg' alt='' />
        </picture>
      </div>
    </section>
  );
}

export default CourseSection;
