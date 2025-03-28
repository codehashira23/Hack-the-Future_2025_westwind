import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
// import Mentorship from "../components/Mentorship";
import HowItWorks from "./components/howitworks";
// import SuccessStories from "../components/SuccessStories";
// import Community from "../components/Community";
// import Testimonials from "../components/Testimonials";
// import FAQ from "../components/FAQ";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <Mentorship /> */}
      <HowItWorks />
      {/* <SuccessStories />
      <Community />
      <Testimonials />
      <FAQ />
      <Footer /> */}
    </div>
  );
};

export default Home;
