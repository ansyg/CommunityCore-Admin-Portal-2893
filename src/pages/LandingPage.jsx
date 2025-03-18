import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';

const LandingPage = () => {
  return (
    <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default LandingPage;