import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='sticky top-0 py-25px bg-white z-50'>
      <div className='flex justify-between w-[90%] mx-auto lg:w-[83%]'>
        <nav className='flex items-center gap-1.5 lg:gap-3'>
          <div className='flex items-center gap-2'>
            <Image
              src='/assets/icons/decadeLogo_mini.svg'
              alt='decade logo icon'
              width={30}
              height={30}
              className='lg:w-[39px]'
            />
            <p className='text-zinc-700 text-lg font-bold hidden lg:inline-block'>
              Dacade
            </p>
          </div>
          <div className='h-full overflow-hidden'>
            <div className='border-gray-200 border-r-2 h-10'></div>
          </div>
          <div>
            <Image
              alt='near balkans icon'
              src='/assets/icons/nearBakans_mini.svg'
              width={29}
              height={29}
              className='lg:hidden'
            />
            <Image
              alt='near balkans icon'
              src='/assets/icons/nearBakans_full.svg'
              width={120}
              height={38}
              className='hidden lg:inline-block'
            />
          </div>
        </nav>
        <nav className='lg:text-lg'>
          <Link href='courses' className='hidden lg:inline-block lg:mr-16'>
            Start The Course
          </Link>
          <Link href='/wallet'>
            <button
              className='bg-zinc-700 text-white py-3 px-5 border-solid rounded-full leading-4 border'
              type='button'
            >
              Create wallet
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
