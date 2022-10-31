import Image from 'next/image';
import React from 'react';

function CourseSection() {
  return (
    <section>
      <div>
        <div>
          <Image alt='spot icon' />
        </div>
        <div>
          <h3>Complete the course</h3>
          <p>In three simple modules, learn:</p>
          <div>
            <Image alt='essential icon' />
            <p>Essential NEAR concepts</p>
          </div>
          <div>
            <Image alt='contract icon' />
            <p>Essential NEAR concepts</p>
          </div>
          <div>
            <Image alt='dapps icon' />
            <p>Essential NEAR concepts</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
