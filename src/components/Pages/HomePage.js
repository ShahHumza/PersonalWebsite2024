import React from 'react';
import 'bulma/css/bulma.min.css';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          {/* Left side with information */}
          <div className="column is-one-third" style={{ marginTop: '5%' }}>
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
            </div>
          </div>

          {/* Right side with the picture */}
          <div className="column is-two-thirds">
            <div className="image" style={{
              backgroundImage: `url('./Images/Humza.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '120vh',
              width: '80%',
              marginTop: '5%'
              
            }}>
              {/* You can add an overlay or any other content here if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
