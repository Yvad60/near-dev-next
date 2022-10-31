import Head from 'next/head';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import CourseSection from '../components/HomePage/CourseSection';
import CtaSection from '../components/HomePage/CtaSection';
import HeroSection from '../components/HomePage/HeroSection';
import OpenSection from '../components/HomePage/OpenSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>NEAR dev 101</title>
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <OpenSection />
        <CourseSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
