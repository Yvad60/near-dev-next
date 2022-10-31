import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer>
      <p>
        Visit <span>nearbalkans.org</span> and make sure to follow us on our
        social and community channels!
      </p>
      <div>
        <Image alt='Near balkans logo' />
        <div className='separator'></div>
        <div>
          <Image alt='twitter logo' />
          <Image alt='discord logo' />
          <Image alt='telegram logo' />
          <Image alt='facebook logo' />
          <Image alt='linkedin logo' />
          <Image alt='instagram logo' />
          <Image alt='medium logo' />
        </div>
        <div>
          <Link href='#'>NEAR Balkans 2022</Link>
          <Link href='#'>info@nearbalkans.org</Link>
          <Link href='#'>Privacy Policy</Link>
          <Link href='#'>Cookie Policy</Link>
          <Link href='#'>Terms & Conditions</Link>
        </div>
        <p>
          NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro,
          North Macedonia, Serbia, and Slovenia
        </p>
      </div>
    </footer>
  );
}

export default Footer;
