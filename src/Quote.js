import React from 'react';
import './Quote.css'; 
import Quotes from './Quotes.json'; 

function Quote() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play-circle">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16"></polygon>
          </svg>
          <h1>GeekFoods</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/quote">Quote</a></li>
            <li><a href="/resturants">Restaurants</a></li>
            <li><a href="/foods">Foods</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <button className="get-started-btn">Get started</button>
      </header>

      <main className="main">
        <section className="quote-section">
          {Quotes.map((quote, index) => (
            <div key={index} className="quote">
              <p className="quote-text">{quote.text}</p>
              <p className="quote-author">{quote.author}</p>
            </div>
          ))}
        </section>

        {/* yeh apna footer hai */}
        <footer className="footer">
          <div className="footer-top">
            <h2>GeekFoods</h2>
            <p className="footer-text">All rights reserved under Abhishek Pal.</p>
          </div>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">History</a>
            <a href="#">Project</a>
            <a href="#">Services</a>
          </div>
          <div className="footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com/inc_abhiishek" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/inc-abhishek/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.github.com/abhirag955123" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Quote;
