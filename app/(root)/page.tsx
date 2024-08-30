"use client"
import ServicesCarousel from '@/components/shared/ServicesCarousel';
import SideBySideParagraphAndTags from '@/components/shared/SideBySideParagraphAndTags';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="w-full">
      <SideBySideParagraphAndTags/>
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
        {/* <ServicesCarousel /> */}
      </section>
    </div>

  );
};

export default Home;
