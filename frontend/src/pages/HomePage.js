import React from "react";
import "./HomePage.css";
import HeroSection from "../components/HeroSection";
import TabsSection from "../components/TabsSection";
import WhyPeopleLove from "../components/WhyPeopleLove";
import VideoSection from "../components/VideoSection";
import FeaturesSection from "../components/FeaturesSection";
import DownloadCTA from "../components/DownloadCTA";
import UniqueSoftware from "../components/UniqueSoftware";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import FinalCTA from "../components/FinalCTA";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <TabsSection />
      <WhyPeopleLove />
      <VideoSection />
      <FeaturesSection />
      <DownloadCTA />
      <UniqueSoftware />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default HomePage;
