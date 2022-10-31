import Image from 'next/image';

export default function HeroSection() {
  return (
    <section>
      <div>
        <h1>
          Get <span>Near</span> Certified!
        </h1>
        <p>
          We, in NEAR Balkans, know how important it is to have regional and
          local support. Now you can become NEAR certified in a regional
          language of preference and connect with our team to support your
          further growth within the NEAR ecosystem.
        </p>
      </div>
      <Image alt='scroll down icon' />
      <h3>Making your NEAR learning easy.</h3>
    </section>
  );
}
