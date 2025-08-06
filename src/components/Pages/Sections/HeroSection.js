// components/HeroSection.js
import React from 'react';
import '../css/HeroSection.css'; // Import the HeroSection styles
// import profileImage from '../assets/profile.jpg'; // Replace with your actual image

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-split hero-left">
        <div className="overlay">
          <img  alt="Profile" className="profile-image" />
          <h1 className="title is-2 has-text-white">John Doe</h1>
          <h2 className="subtitle is-4 has-text-white">Full Stack Engineer & Avid Golfer</h2>
        </div>
      </div>
      <div className="hero-split hero-right" />
    </section>
  );
}

export default HeroSection;
