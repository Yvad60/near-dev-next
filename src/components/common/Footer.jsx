import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <div className='px-22px text-center mt-24 mb-16'>
        <p className='text-lg'>
          Visit <span className='font-bold'>nearbalkans.org</span> and make sure
          to follow us on our social and community channels!
        </p>
        <div className='flex flex-col gap-10'>
          <div className='flex justify-center mt-10 items-center'>
            <picture className='hidden lg:block'>
              <img src='/assets/icons/nearBakans_full.svg' alt='' />
            </picture>
            <div className='flex justify-between items-center  px-2  gap-6'>
              <picture>
                <img src='/assets/icons/twitter.svg' alt='twitter logo' />
              </picture>
              <picture>
                <img src='/assets/icons/discord.svg' alt='discord logo' />
              </picture>
              <picture>
                <img src='/assets/icons/telegram.svg' alt='telegram logo' />
              </picture>
              <picture>
                <img src='/assets/icons/facebook.svg' alt='facebook logo' />
              </picture>
              <picture>
                <img src='/assets/icons/linkedin.svg' alt='linkedin logo' />
              </picture>
              <picture>
                <img src='/assets/icons/instagram.svg' alt='instagram logo' />
              </picture>
              <picture>
                <img src='/assets/icons/medium.svg' alt='medium logo' />
              </picture>
            </div>
          </div>
          <div className='flex flex-col text-lg'>
            <Link href='#'>NEAR Balkans 2022</Link>
            <Link href='#'>info@nearbalkans.org</Link>
            <Link href='#'>Privacy Policy</Link>
            <Link href='#'>Cookie Policy</Link>
            <Link href='#'>Terms & Conditions</Link>
          </div>
          <p className='text-lg'>
            NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia,
            Montenegro, North Macedonia, Serbia, and Slovenia
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
