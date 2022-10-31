function CertificateSection() {
  return (
    <section className='mt-16 px-22px'>
      <div className='flex flex-col items-center text-center'>
        <div>
          <h3 className='text-2xl leading-44px -tracking-0.02rem font-medium'>
            Claim NEAR certificate
          </h3>
          <p className='text-secondary_dark leading-6 text-lg'>
            Upon course completion, receive the NEAR dev 101 certificate as an
            NFT on your NEAR wallet.
          </p>
        </div>
        <picture>
          <img className="mt-8" src='/assets/images/cetificate.png' alt='certificate' />
        </picture>
      </div>
    </section>
  );
}

export default CertificateSection;
