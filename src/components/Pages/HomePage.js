import React, { useState, useEffect } from 'react';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Replace these with the embed URLs for your Instagram Reels
  // To get the embed URL, click the "..." on your Instagram post and choose "Embed"
  const reelUrls = [
    'https://www.instagram.com/p/DNOABsmORBs/embed/',
    'https://www.instagram.com/reel/DNQiqmTuks_/embed/',
    'https://www.instagram.com/p/DLKnrcjsy5X/embed/'
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showMessage = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const handleProjectClick = (projectName) => {
    showMessage(`You clicked on '${projectName}'.`);
  };

  return (
    <>
      <style>
        {`
          @import url('https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');

          :root {
            --color-primary: #6366f1;
            --color-secondary: #f59e0b;
            --color-background-light: #f3f4f6;
            --color-background-dark: #1f2937;
            --color-text-dark: #111827;
            --color-text-light: #f9fafb;
          }

          body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: var(--color-background-light);
            color: var(--color-text-dark);
          }

          .hero-background {
            background-image: linear-gradient(135deg, #a7b3ff, #b6d3fe);
          }

          .is-stone-50 {
            background-color: var(--color-background-light);
          }
          
          .has-text-stone-800 {
            color: var(--color-text-dark);
          }

          .is-sticky-top {
            position: sticky;
            top: 0;
            z-index: 50;
          }

          .backdrop-blur {
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            background-color: rgba(243, 244, 246, 0.85);
          }

          .is-rounded-md {
            border-radius: 0.375rem;
          }

          .is-rounded-lg {
            border-radius: 0.5rem;
          }

          .is-rounded-xl {
            border-radius: 0.75rem;
          }

          .is-rounded-full {
            border-radius: 9999px;
          }

          .is-shadow-md {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .is-shadow-lg {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }

          .is-shadow-xl {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          
          .is-shadow-colorful {
            box-shadow: 0 8px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -2px rgba(99, 102, 241, 0.2);
          }

          .is-fixed-bottom-right {
            position: fixed;
            bottom: 1rem;
            right: 1rem;
          }

          .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
          }

          .scale-0 {
            transform: scale(0);
          }

          .scale-100 {
            transform: scale(1);
          }

          .min-h-screen-minus-header {
            min-height: calc(100vh - 64px);
          }

          .hover\\:is-shadow-xl:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          
          .hover\\:is-scale-105:hover {
            transform: scale(1.05);
          }

          .instagram-reel {
            width: 100%;
            height: 600px; /* Adjust height as needed */
            max-width: 400px;
            margin: auto;
          }

          .instagram-reel iframe {
            width: 100%;
            height: 100%;
          }
        `}
      </style>

      <div className="has-background-light has-text-dark">
        {/* Header */}
        <header className="py-4 has-border-bottom is-sticky-top backdrop-blur">
          <div className="container is-fullhd px-4">
            <nav className="level is-mobile">
              <div className="level-left">
                <div className="level-item">
                  <a href="#home" className="title is-4 has-text-primary">Humza Shah</a>
                </div>
              </div>
              <div className="level-right is-hidden-touch">
                <div className="level-item">
                  <a href="#skills" className="has-text-dark hover:has-text-primary transition-all">Skills</a>
                </div>
                <div className="level-item">
                  <a href="#projects" className="has-text-dark hover:has-text-primary transition-all">Projects</a>
                </div>
                <div className="level-item">
                  <a href="#golf" className="has-text-dark hover:has-text-primary transition-all">Golf</a>
                </div>
                <div className="level-item">
                  <a href="#contact" className="has-text-dark hover:has-text-primary transition-all">Contact</a>
                </div>
              </div>
              <div className="level-right is-hidden-desktop">
                <div className="level-item">
                  <button
                    className="button is-ghost has-text-dark"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                  >
                    <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </div>

          {/* Mobile Menu */}
          <div className={`is-hidden-desktop has-text-centered py-4 has-background-light has-border-top ${isMobileMenuOpen ? 'block' : 'is-hidden'}`}>
            <a href="#skills" className="is-block py-2 has-text-dark has-hover-background-grey-lighter" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
            <a href="#projects" className="is-block py-2 has-text-dark has-hover-background-grey-lighter" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#golf" className="is-block py-2 has-text-dark has-hover-background-grey-lighter" onClick={() => setIsMobileMenuOpen(false)}>Golf</a>
            <a href="#contact" className="is-block py-2 has-text-dark has-hover-background-grey-lighter" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
        </header>

        <main className="is-full-height">
          {/* Hero Section */}
          <section id="home" className="section has-text-centered min-h-screen-minus-header is-flex is-align-items-center is-justify-content-center hero-background">
            <div className="container is-fullhd">
              <h1 className="title is-1 has-text-white">
                Humza Shah: Full-Stack Engineer
              </h1>
              <p className="subtitle is-4 has-text-light mb-6">
                I build elegant, scalable web applications. When I'm not coding, you can find me on the golf course.
              </p>
              <div className="buttons is-centered">
                <a href="#projects" className="button is-dark is-rounded is-large is-shadow-colorful">
                  View Projects
                </a>
                <a href="#contact" className="button is-light is-rounded is-large is-shadow-colorful">
                  Get in Touch
                </a>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section">
            <div className="container is-fullhd has-text-centered">
              <h2 className="title is-2 mb-6">My Skills</h2>
              <div className="columns is-multiline is-centered">
                <div className="column is-half-tablet is-one-quarter-desktop">
                  <div className="box is-rounded-lg is-shadow-md hover:is-shadow-xl transition-all hover:is-scale-105">
                    <h3 className="title is-5">React</h3>
                    <p className="subtitle is-6">Building dynamic user interfaces.</p>
                  </div>
                </div>
                <div className="column is-half-tablet is-one-quarter-desktop">
                  <div className="box is-rounded-lg is-shadow-md hover:is-shadow-xl transition-all hover:is-scale-105">
                    <h3 className="title is-5">Node.js</h3>
                    <p className="subtitle is-6">Creating scalable backend services.</p>
                  </div>
                </div>
                <div className="column is-half-tablet is-one-quarter-desktop">
                  <div className="box is-rounded-lg is-shadow-md hover:is-shadow-xl transition-all hover:is-scale-105">
                    <h3 className="title is-5">TypeScript</h3>
                    <p className="subtitle is-6">Ensuring code quality and reliability.</p>
                  </div>
                </div>
                <div className="column is-half-tablet is-one-quarter-desktop">
                  <div className="box is-rounded-lg is-shadow-md hover:is-shadow-xl transition-all hover:is-scale-105">
                    <h3 className="title is-5">Databases</h3>
                    <p className="subtitle is-6">Working with SQL and NoSQL solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section has-background-white-ter">
            <div className="container is-fullhd has-text-centered">
              <h2 className="title is-2 mb-6">My Projects</h2>
              <div className="columns is-multiline is-centered">
                <div className="column is-full-mobile is-one-third-desktop">
                  <div className="box is-rounded-lg is-shadow-md hover:is-shadow-xl transition-all hover:is-scale-105 is-clickable" onClick={() => handleProjectClick('Project A')}>
                    <h3 className="title is-5">Project A</h3>
                    <p className="subtitle is-6">A web application for task management.</p>
                  </div>
                </div>
                <div className="column is-full-mobile is-one-third-desktop">
                  <div className="box is-rounded-lg is-shadow-md hover:is-shadow-xl transition-all hover:is-scale-105 is-clickable" onClick={() => handleProjectClick('Project B')}>
                    <h3 className="title is-5">Project B</h3>
                    <p className="subtitle is-6">An e-commerce platform with Stripe integration.</p>
                  </div>
                </div>
                <div className="column is-full-mobile is-one-third-desktop">
                  <div className="box is-rounded-lg is-shadow-md hover:is-shadow-xl transition-all hover:is-scale-105 is-clickable" onClick={() => handleProjectClick('Project C')}>
                    <h3 className="title is-5">Project C</h3>
                    <p className="subtitle is-6">A mobile-first recipe sharing app.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Golf Section */}
          <section id="golf" className="section">
            <div className="container is-fullhd has-text-centered">
              <h2 className="title is-2 mb-6">On the Golf Course</h2>
              <p className="subtitle is-5 mb-5">When I'm not coding, I'm often found working on my swing and enjoying a round of golf. It's a great way to unwind and focus.</p>
              <div className="columns is-multiline is-centered">
                {reelUrls.map((url, index) => (
                  <div key={index} className="column is-one-third-desktop">
                    <div className="box is-rounded-lg is-shadow-md hover:is-shadow-xl transition-all hover:is-scale-105">
                      <div className="instagram-reel">
                        <iframe
                          src={url}
                          frameBorder="0"
                          allowFullScreen
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section has-background-white-ter">
            <div className="container is-fullhd has-text-centered">
              <h2 className="title is-2 mb-6">Get In Touch</h2>
              <p className="subtitle is-5 mb-6">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
              <div className="box is-rounded-lg is-shadow-md">
                <form>
                  <div className="field">
                    <div className="control">
                      <input className="input is-rounded-md" type="text" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input is-rounded-md" type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea className="textarea is-rounded-md" placeholder="Your Message"></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button type="submit" className="button is-primary is-fullwidth is-rounded-md">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer has-text-centered has-background-dark has-text-light">
          <div className="container">
            <p>© 2026 Humza Shah. All rights reserved.</p>
          </div>
        </footer>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal is-active">
            <div className="modal-background" onClick={() => setIsModalOpen(false)}></div>
            <div className="modal-content is-rounded-xl">
              <div className="box has-text-centered">
                <p className="subtitle is-5">{modalMessage}</p>
                <button
                  className="button is-dark is-rounded is-small mt-4"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => setIsModalOpen(false)}></button>
          </div>
        )}

        {/* Scroll-to-top button */}
        <button
          className={`button is-primary is-rounded-full is-fixed-bottom-right is-shadow-lg transition-all ${showScrollButton ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default App;
