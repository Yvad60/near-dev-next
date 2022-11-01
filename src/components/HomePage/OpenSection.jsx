import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function OpenSection() {
  return (
    <section className='px-22px'>
      <div>
        <div className='flex flex-col items-center text-center'>
          <h3 className='text-32px font-medium text-primary_dark leading-7 -tracking-0.02rem lg:text-5xl font-graphik_medium'>
            Making your NEAR <br /> learning easy.
          </h3>
          <div className='flex flex-col pt-16 lg:pt-32 lg:flex-row-reverse lg:justify-between lg:text-left items-center lg:w-[940px] relative '>
            <Image
              alt='near wallpaper'
              width={180}
              height={180}
              src='/assets/images/near_white_bg.png'
              className='pb-4 lg:w-[296px]'
            />
            <div className='hidden lg:block bg-hero_background w-[480px] h-[480px] blur-[160px] opacity-[0.9] absolute -top-10 -right-[20%]'></div>
            <div className='lg:max-w-[390px]'>
              <h3 className='font-medium text-2xl leading-44px -tracking-0.02rem lg:text-4xl font-graphik_medium'>
                Open NEAR wallet
              </h3>
              <p className='pt-1 text-secondary_dark lg:text-lg leading-6'>
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
          <div className='hidden items-center lg:flex'>
            <picture>
              <img src='/assets/icons/goDown.svg' alt='' />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenSection;
