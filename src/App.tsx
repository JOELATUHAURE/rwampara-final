import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Restaurant from './components/Restaurant';
import Booking from './components/Booking';
import Reviews from './components/Reviews';
import SpecialOffers from './components/SpecialOffers';
import VideoTour from './components/VideoTour';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Restaurant />
        <ImageSlider />
        <Reviews />
        <SpecialOffers />
        <VideoTour />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;