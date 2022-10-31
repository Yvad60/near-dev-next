import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='sticky top-0 py-25px bg-white z-50'>
      <div className='flex justify-between items-center w-[90%] mx-auto'>
        <nav className='flex gap-1.5'>
          <div className='flex'>
            <Image
              src='/assets/icons/decadeLogo_mini.svg'
              alt='decade logo icon'
              width={30}
              height={30}
            />
            <p className='hidden'>Decade</p>
          </div>
          <div className='border-gray-200 border-r-2'></div>
          <div>
            <Image
              alt='near balkans icon'
              src='/assets/icons/nearBakans_mini.svg'
              width={29}
              height={29}
            />
          </div>
        </nav>
        <nav>
          <Link href='#' className='hidden'>
            Start the course
          </Link>
          <Link href='#'>
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
