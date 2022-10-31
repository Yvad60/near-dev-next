import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='text-center px-[23px]'>
      <div className='bg-hero_background h-[600px] -top-[320px] left-0 absolute w-[50%] z-10 opacity-[0.4] lg:opacity-[0.1]'></div>
      <div className='bg-hero_background h-[600px] -top-[320px] right-0 absolute w-[40%] z-10 opacity-[0.4] lg:opacity-[0.1]'></div>
      <div className='flex flex-col gap-5 lg:gap-8 items-center pt-156px lg:pt-[240px] max-w-[910px] mx-auto'>
        <h1 className='w-200px text-4xl leading-normal font-medium text-primary_dark lg:text-7xl lg:w-full font-graphik_medium'>
          Get{' '}
          <span className='bg-gradient-to-r from-[#9092fb] via-[#86b5ef] to-[#7bdde2] bg-clip-text w-fit text-transparent'>
            NEAR
          </span>{' '}
          Certified!
        </h1>
        <p className='text-secondary_dark leading-7 text-lg lg:text-22px'>
          We, in NEAR Balkans, know how important it is to have regional and
          local support. Now you can become NEAR certified in a regional
          language of preference and connect with our team to support your
          further growth within the NEAR ecosystem.
        </p>
      </div>
      <Image
        alt='scroll down icon'
        src='/assets/icons/scrollDown.svg'
        width={28}
        height={28}
        className='block mx-auto mt-24 mb-44'
      />
    </section>
  );
}
