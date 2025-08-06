import React from 'react';
import HeroSection from './Sections/HeroSection.js';
import './css/HomePage.css'; // Import the dedicated CSS file

const HomePage = () => {
  return (
    <div className="homepage-wrapper"> {/* Custom class for overall spacing */}
      <HeroSection />

      {/* Main Content Area: Bulma Columns */}
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-8"> {/* is-variable and is-8 for gap */}

            {/* Left Column: Skills & Latest Projects (Dark Background) */}
            <div className="column is-two-thirds"> {/* Wider left column */}
              <div className="box has-background-dark has-text-white p-6"> {/* Bulma box for card-like appearance */}
                <h2 className="title is-2 has-text-white has-text-centered mb-6">Skills</h2>
                <div className="columns is-multiline is-mobile has-text-centered">
                  {/* Skill Card */}
                  <div className="column is-one-third">
                    <figure className="image is-64x64 mx-auto mb-2">
                      <img src="https://placehold.co/64x64/007ACC/ffffff?text=TS" alt="TypeScript" className="is-rounded" />
                    </figure>
                    <p className="subtitle is-6 has-text-white">TypeScript</p>
                  </div>
                  <div className="column is-one-third">
                    <figure className="image is-64x64 mx-auto mb-2">
                      <img src="https://placehold.co/64x64/61DAFB/000000?text=React" alt="React" className="is-rounded" />
                    </figure>
                    <p className="subtitle is-6 has-text-white">React</p>
                  </div>
                  <div className="column is-one-third">
                    <figure className="image is-64x64 mx-auto mb-2">
                      <img src="https://placehold.co/64x64/339933/ffffff?text=Node" alt="Node.js" className="is-rounded" />
                    </figure>
                    <p className="subtitle is-6 has-text-white">Node.js</p>
                  </div>
                  <div className="column is-one-third">
                    <figure className="image is-64x64 mx-auto mb-2">
                      <img src="https://placehold.co/64x64/4B8BBE/ffffff?text=Python" alt="Python" className="is-rounded" />
                    </figure>
                    <p className="subtitle is-6 has-text-white">Python</p>
                  </div>
                  <div className="column is-one-third">
                    <figure className="image is-64x64 mx-auto mb-2">
                      <img src="https://placehold.co/64x64/FF9900/ffffff?text=AWS" alt="AWS" className="is-rounded" />
                    </figure>
                    <p className="subtitle is-6 has-text-white">AWS</p>
                  </div>
                  <div className="column is-one-third">
                    <figure className="image is-64x64 mx-auto mb-2">
                      <img src="https://placehold.co/64x64/00758F/ffffff?text=SQL" alt="SQL" className="is-rounded" />
                    </figure>
                    <p className="subtitle is-6 has-text-white">SQL</p>
                  </div>
                </div>

                <h2 className="title is-2 has-text-white has-text-centered mb-6">Latest Projects</h2>
                <div className="columns is-multiline">
                  {/* Project Card 1 */}
                  <div className="column is-half">
                    <div className="card has-background-grey-darker">
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src="https://placehold.co/600x400/a0aec0/ffffff?text=Project+1" alt="Project 1" />
                        </figure>
                      </div>
                      <div className="card-content has-text-white">
                        <p className="title is-4 has-text-white">Project Alpha</p>
                        <p className="subtitle is-6 has-text-grey-light">A brief description of Project Alpha, highlighting its key features and technologies used.</p>
                        <button onClick={() => alert('View Project Alpha details!')} className="button is-link is-small is-outlined">
                          Learn More &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Project Card 2 */}
                  <div className="column is-half">
                    <div className="card has-background-grey-darker">
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src="https://placehold.co/600x400/a0aec0/ffffff?text=Project+2" alt="Project 2" />
                        </figure>
                      </div>
                      <div className="card-content has-text-white">
                        <p className="title is-4 has-text-white">Project Beta</p>
                        <p className="subtitle is-6 has-text-grey-light">A brief description of Project Beta, highlighting its key features and technologies used.</p>
                        <button onClick={() => alert('View Project Beta details!')} className="button is-link is-small is-outlined">
                          Learn More &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Project Card 3 */}
                  <div className="column is-half">
                    <div className="card has-background-grey-darker">
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src="https://placehold.co/600x400/a0aec0/ffffff?text=Project+3" alt="Project 3" />
                        </figure>
                      </div>
                      <div className="card-content has-text-white">
                        <p className="title is-4 has-text-white">Project Gamma</p>
                        <p className="subtitle is-6 has-text-grey-light">A brief description of Project Gamma, highlighting its key features and technologies used.</p>
                        <button onClick={() => alert('View Project Gamma details!')} className="button is-link is-small is-outlined">
                          Learn More &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Golf Stats & Golf Adventures (Light Background) */}
            <div className="column is-one-third"> {/* Narrower right column */}
              <div className="box p-6">
                <h2 className="title is-2 has-text-centered mb-6">Golf Stats</h2>
                <div className="columns is-mobile is-centered is-vcentered mb-6">
                  {/* Handicap Visual */}
                  <div className="column is-half has-text-centered">
                    <div className="handicap-circle"> {/* Custom class for the circle */}
                      <p className="title is-1 has-text-info">5.2</p>
                    </div>
                    <p className="subtitle is-6">Handicap</p>
                  </div>

                  {/* Other Stats */}
                  <div className="column is-half">
                    <div className="content">
                      <p><span className="color-dot is-green"></span> Average Score: <strong className="has-text-success">82</strong></p>
                      <p><span className="color-dot is-yellow"></span> Rounds Played (YTD): <strong className="has-text-warning">35</strong></p>
                      <p><span className="color-dot is-red"></span> Fairways Hit: <strong className="has-text-danger">65%</strong></p>
                    </div>
                  </div>
                </div>

                <h2 className="title is-2 has-text-centered mb-6">Golf Adventures</h2>
                <div className="columns is-multiline is-mobile">
                  <div className="column is-half">
                    <figure className="image is-4by3">
                      <img src="https://placehold.co/600x400/66bb6a/ffffff?text=Course+View+1" alt="Golf Course View 1" className="is-rounded" />
                    </figure>
                  </div>
                  <div className="column is-half">
                    <figure className="image is-4by3">
                      <img src="https://placehold.co/600x400/66bb6a/ffffff?text=Sunrise+Golf" alt="Sunrise Golf" className="is-rounded" />
                    </figure>
                  </div>
                  <div className="column is-half">
                    <figure className="image is-4by3">
                      <img src="https://placehold.co/600x400/66bb6a/ffffff?text=Course+View+2" alt="Golf Course View 2" className="is-rounded" />
                    </figure>
                  </div>
                  <div className="column is-half">
                    <figure className="image is-4by3">
                      <img src="https://placehold.co/600x400/66bb6a/ffffff?text=Putting+Green" alt="Putting Green" className="is-rounded" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action/Contact */}
      <section className="hero is-dark is-medium has-text-centered">
        <div className="hero-body">
          <p className="title is-2">Ready to collaborate?</p>
          <p className="subtitle is-4">Let's build something amazing together, or hit the links!</p>
          <button onClick={() => alert('Navigating to Contact Page!')} className="button is-info is-large is-rounded mt-5">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer has-background-dark has-text-grey-light">
        <div className="content has-text-centered">
          <div className="columns is-vcentered is-mobile">
            <div className="column has-text-left-desktop has-text-centered-mobile">
              <p>&copy; {new Date().getFullYear()} Humza Shah. All rights reserved.</p>
            </div>
            <div className="column has-text-right-desktop has-text-centered-mobile">
              <p>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="has-text-grey-light mr-4">
                  <span className="icon is-large"><i className="fab fa-linkedin-in fa-lg"></i></span>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="has-text-grey-light mr-4">
                  <span className="icon is-large"><i className="fab fa-github fa-lg"></i></span>
                </a>
                <span className="icon is-large has-text-success"> {/* Using has-text-success for golf flag */}
                  <i className="fas fa-flag-checkered fa-lg"></i> {/* Using a generic flag for golf, you might need a custom SVG */}
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;