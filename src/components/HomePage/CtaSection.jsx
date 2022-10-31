function CtaSection() {
  return (
    <section className='mt-36'>
      <div className='flex flex-col items-center lg:flex-row-reverse lg:w-[1067px] lg:justify-between lg:mx-auto lg:bg-cta_background lg:bg-cover'>
        <picture>
          <img
            className='w-[180px] lg:w-[400px]'
            src='/assets/images/near_gradient_bg.png'
            alt='Near wallet wallpaper 2'
          />
        </picture>
        <div className='flex flex-col items-center lg:items-start'>
          <h3 className='text-2xl leading-44px -tracking-0.02rem font-medium lg:text-4xl'>
            Near development 101
          </h3>
          <button className='mt-4 rounded-full px-5 py-3 border border-solid text-primary_dark leading-4 border-primary_dark'>
            Start the course
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
