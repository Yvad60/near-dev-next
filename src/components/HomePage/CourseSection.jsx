import Image from 'next/image';
import React from 'react';

function CourseSection() {
  return (
    <section className='mt-16'>
      <div className='flex flex-col items-center text-center'>
        <div>
          <Image
            width={180}
            height={180}
            src='/assets/icons/spot.svg'
            alt='spot icon'
          />
        </div>
        <div className='flex flex-col gap-6'>
          <h3 className='text-2xl leading-44px -tracking-0.02rem font-medium my-5'>
            Complete the course
          </h3>
          <p className='text-lg text-secondary_dark leading-6'>
            In three simple modules, learn:
          </p>
          <div className='flex flex-col items-center gap-2'>
            <Image
              width={18}
              height={18}
              src='/assets/images/essential_icon.png'
              alt='essential icon'
            />
            <p className='text-secondary_dark'>Essential NEAR concepts</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Image
              width={18}
              height={18}
              src='/assets/images/contract_icon.png'
              alt='contract icon'
            />
            <p className='text-secondary_dark'>
              How to write smart contracts on NEAR
            </p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Image
              src='/assets/images/dapps_icon.png'
              width={18}
              height={18}
              alt='dapps icon'
            />
            <p className='text-secondary_dark'>
              How to build dapps on the NEAR blockchain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
