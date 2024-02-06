import React from 'react';
import 'bulma/css/bulma.min.css';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className="section" style={{ height: '100vh', display: 'flex' }}>
      {/* Right side with the picture */}
      <div className="column is-flex is-flex-grow-1" style={{
        backgroundImage: `url('./Images/Humza.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        {/* You can add an overlay or any other content here if needed */}
      </div>

      {/* Left side with information */}
      <div className="column is-flex is-flex-grow-1 has-background-light p-4">
        <div className="content">
          <div className="vertical-name">
            <div>
              <span className="letter" style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}>H</span>
              <span className="word">umble</span>
            </div>
            <div>
              <span className="letter" style={{ color: 'blue', fontWeight: 'bold', fontSize: '20px' }}>U</span>
              <span className="word">nstopabble</span>
            </div>
            <div>
              <span className="letter" style={{ color: 'green', fontWeight: 'bold', fontSize: '20px' }}>M</span>
              <span className="word">otivated</span>
            </div>
            <div>
              <span className="letter" style={{ color: 'orange', fontWeight: 'bold', fontSize: '20px' }}>Z</span>
              <span className="word">ealous</span>
            </div>
            <div>
              <span className="letter" style={{ color: 'purple', fontWeight: 'bold', fontSize: '20px' }}>A</span>
              <span className="word">mbitious</span>
            </div>
          </div>

          <h3 className="title">Humza Shah</h3>
          <p>Connect with me: <a href="tel:845-649-9761">845-649-9761</a> | <a href="mailto:humzashah1001@gmail.com">humzashah1001@gmail.com</a> | <a href="https://linkedin.com/in/humzashah1001/">LinkedIn</a> | <a href="https://github.com/ShahHumza">GitHub</a></p>

          {/* Additional content */}
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
    </section>
  );
};

export default HomePage;
