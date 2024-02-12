import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <h2>About Me Page</h2>
      {/* Add your resume content here */}
      {/* Additional content */}
      <div className="columns">
          <div className="column">
            <article className="message">
              <div className="message-header">
                <p>Sports Enthusiast</p>
              </div>
              <div className="message-body">
                Beyond the lines of code, I find joy in the dynamic world of sports. Whether it's shooting hoops, teeing off, rallying on the tennis court, or spiking on the volleyball court, I'm all about embracing the competitive spirit and the thrill of the game.
              </div>
            </article>

            <article className="message">
              <div className="message-header">
                <p>Chasing the Sun</p>
              </div>
              <div className="message-body">
                Warm weather is my happy place. Whether it's basking in the sun or enjoying a game outdoors, I thrive in the warmth. It's the perfect complement to the analytical and structured world of coding.
              </div>
            </article>

            <article className="message">
              <div className="message-header">
                <p>Coding Journey</p>
              </div>
              <div className="message-body">
                As a Software Developer Intern at Hubbell Incorporated, I dove into the world of C# and .NET technologies. I played a key role in enhancing the Visual Network Management System, ensuring seamless communication and an elevated user experience.
              </div>
              <div className="message-body">
                My stint as a Web Developer Intern at Interact Marketing further fueled my passion. I engineered web solutions with minimal HTML and CSS, optimizing performance and boosting client web page growth by 30% through SEO techniques.
              </div>
            </article>

            <article className="message">
              <div className="message-header">
                <p>Projects that Define Me</p>
              </div>
              <div className="message-body">
                My coding journey extends beyond the professional realm, manifesting in various projects. From developing a sophisticated Question-Answer System utilizing Python, JavaScript, SQL, and BERT Model, to creating a cutting-edge Workout Tracker with Vue, MongoDB, and React.
              </div>
              <div className="message-body">
                Whether it's generating mazes with JavaScript and HTML or managing projects in Unreal Engine using C++, my projects showcase not just technical prowess but a dedication to innovation and continuous learning.
              </div>
            </article>

            <article className="message">
              <div className="message-header">
                <p>Technical Toolbox</p>
              </div>
              <div className="message-body">
                When it comes to languages, I'm well-versed in Java, Python, C#, C++, JavaScript, HTML, CSS, and more. Frameworks like React, Node, and WordPress, along with developer tools like Visual Studio, Git, and Linux, are my trusted companions.
              </div>
              <div className="message-body">
                Join me on my journey where lines of code meet the love for sports, and the warmth of sunny days fuels a passion for innovation!
              </div>
            </article>
          </div>
        </div>
    </div>
  );
};

export default AboutMe;
