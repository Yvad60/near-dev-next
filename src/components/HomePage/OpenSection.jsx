import Image from 'next/image';
import React from 'react';

function OpenSection() {
  return (
    <section>
      <div>
        <div>
          <h3>Open NEAR wallet</h3>
          <p>
            Opening a NEAR wallet is the first step and essential part of
            joining the NEAR community as well as starting this course.
          </p>
          <button>Create wallet</button>
        </div>
        <div>
          <Image alt='near wallet wallpaper' />
        </div>
      </div>
      <Image alt='scroll down arrow' />
    </section>
  );
}

export default OpenSection;
