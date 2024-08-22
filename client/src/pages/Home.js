import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="hero">
          <h1>I.R.I.S</h1>
          <h2>Innovation Research & Intelligence Support</h2>
          <p>Empowering innovation and fostering technological advancements</p>
        </div>
        <div className="journey">
          <h3>I.R.I.S JOURNEY WITH US</h3>
          <div className="journey-steps">
            <div className="step">
              <h4>Bring Your Idea</h4>
              <p>Transform your concepts into reality with our supportive community.</p>
            </div>
            <div className="step">
              <h4>Collaborate and Develop</h4>
              <p>Work with like-minded individuals to refine and expand your projects.</p>
            </div>
            <div className="step">
              <h4>Achieve and Launch</h4>
              <p>Bring your innovations to life and make a lasting impact in the tech world.</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><Link to="/about">Featured</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Events</h4>
            <ul>
              <li><Link to="/events">Hackathon</Link></li>
              <li><Link to="/events">Seminars</Link></li>
              <li><Link to="/events">Workshops</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Socials</h4>
            <ul>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 | I.R.I.S. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;