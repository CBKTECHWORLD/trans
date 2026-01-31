// import React from 'react';
// import HeroSection from '../components/home/Hero';
// import StatsSection from '../components/home/Stats'; //Counting number automate
// import FeaturesSection from '../components/home/Features';
// import Testimonials from '../components/home/Testimonials';
import '../App.css'
// import StartNow from '../components/home/StartNow';
// import Best from '../components/home/Best';
import Banner from '../components/home/Banner';
import Role from '../components/home/Role';
// import Intro from '../components/home/Intro';
import LanguageCourseCards from '../components/home/LanguageCourseCards';
import WhatsAppCommunity from '../components/home/whatsappsection';
import CourierSection from '../components/home/Courier';
import RecognisedBy from '../components/home/Recognised';
// import VideoTestimonials from '../components/home/VideoTestimonials';

export default function HomePage() {
  return (
    <>
      {/* <HeroSection /> */}
      <Banner />
      {/* <Intro /> */}
      <Role />
      <LanguageCourseCards />
     
      <CourierSection />
      <RecognisedBy />
       <WhatsAppCommunity />
      {/* <StatsSection /> */}
         {/* <StartNow />
      <FeaturesSection /> */}
      {/* <iframe className="aspect-video ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
      <iframe className="aspect-video ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe> */}
      {/* <Best /> */}
      {/* <Testimonials /> */}
      {/* <VideoTestimonials /> */}
      
    </>
  );
}

