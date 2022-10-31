import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function OpenSection() {
  return (
    <section className='px-22px'>
      <div>
        <div className='flex flex-col items-center text-center'>
          <h3 className='text-32px font-medium text-primary_dark leading-7 -tracking-0.02rem'>
            Making your NEAR <br /> learning easy.
          </h3>
          <Image
            alt='near wallpaper'
            width={180}
            height={180}
            src='/assets/images/near_white_bg.png'
            className='pt-16 pb-4'
          />
          <h3 className='font-medium text-2xl leading-44px -tracking-0.02rem'>
            Open NEAR wallet
          </h3>
          <p className='pt-1 text-secondary_dark'>
            Opening a NEAR wallet is the first step and essential part of
            joining the NEAR community as well as starting this course.
          </p>
          <Link href='#'>
            <button className='mt-8 rounded-full px-5 py-3 border border-solid text-primary_dark leading-4 border-secondary_dark'>
              Create wallet
            </button>
          </Link>
        </div>
      </div>
      <div className='hidden'>
        <Image alt='scroll down arrow' />
      </div>
    </section>
  );
}

export default OpenSection;
