import React, { useEffect, useRef } from "react";
import 'bulma/css/bulma.min.css';
import '../css/HeroSection.css'; // Our custom CSS for the planet theme

const HeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const heroRef = useRef(null); // Reference to the main hero section for animation trigger
  const profileImageRef = useRef(null); // Ref for the profile image

  useEffect(() => {
    // Text and image reveal animation on scroll/load
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add('is-visible');
          subtitleRef.current?.classList.add('is-visible');
          profileImageRef.current?.classList.add('is-visible'); // Add visibility class to image
          heroRef.current?.classList.add('is-active-background'); // Trigger background animations
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero is-fullheight planet-theme-hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Elements */}
      {/* Starfield (created with ::before and ::after on .planet-theme-hero) */}

      {/* Main Stylized Planet - Assuming this was removed as per previous request */}
      {/* <div className="planet-main"></div> */}

      {/* Subtle Galactic Glows / Nebulae */}
      <div className="galactic-glow galactic-glow-1"></div>
      <div className="galactic-glow galactic-glow-2"></div>

      {/* Hero Body Content */}
      <div className="hero-body" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container has-text-centered">
          {/* Profile Image */}
          <img
            ref={profileImageRef}
            src="../../../public/Images/IMG_9724.PNG" // Path to your image in the public folder
            alt="Humza Shah Profile"
            className="profile-image" // Custom class for styling
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/128x128/333/FFF?text=Profile'; }} // Fallback
          />

          <h1 ref={titleRef} className="title is-1 has-text-white hero-main-title">
            Hi, I'm <span className="highlight-cosmic">Humza Shah</span> {/* Changed to highlight-cosmic for consistent styling */}
          </h1>
          <p ref={subtitleRef} className="subtitle is-5 has-text-white hero-tagline">
            Full-Stack Engineer by day, golfer by night.
          </p>
          <div className="mt-5">
            <a href="#projects" className="button is-link is-large is-rounded hero-cta-cosmic">
              See My Drive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;