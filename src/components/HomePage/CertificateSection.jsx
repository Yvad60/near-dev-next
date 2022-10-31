import Image from 'next/image';

function CertificateSection() {
  return (
    <section>
      <div>
        <h3>Claim NEAR certificate</h3>
        <p>
          Upon course completion, receive the NEAR dev 101 certificate as an NFT
          on your NEAR wallet.
        </p>
      </div>
      <Image alt='certificate' />
    </section>
  );
}

export default CertificateSection;
