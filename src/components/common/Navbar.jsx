import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <nav className='flex'>
        <div>
          <Image
            src='/assets/icons/decadeLogo_mini.svg'
            alt='decade logo icon'
          />
          <p>Decade</p>
        </div>
        <div>separator</div>
        <div>
          <Image alt='near balkans icon' />
        </div>
      </nav>
      <nav>
        <Link href='#'>Start the course</Link>
        <Link href='#'>
          <button className='bg-zinc-700 text-white py-3 px-5 rounded-full'>
            Create a wallet
          </button>
        </Link>
      </nav>
    </header>
  );
}
